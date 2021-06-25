import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import LoginForm from "@/components/homepage/LoginForm";

const IndexPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push("/inventar");
  //   }
  // }, [session]);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default IndexPage;
