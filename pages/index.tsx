import { connectDB } from "@/config/db";
import User from "@/models/User";
import { Session } from "next-auth";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

const IndexPage = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: any) {
  connectDB();
  const session = await getSession({ req: context.req });
  const user = await User.findOne({ name: session?.user?.name });
  console.log(user);

  return {
    props: {},
  };
}

export default IndexPage;
