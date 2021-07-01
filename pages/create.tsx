import { connectDB } from "@/config/db";

import { getSession } from "next-auth/client";

import Layout from "@/components/ui/Layout";
import CreateForm from "@/components/create/CreateForm";

const CreatePage = () => {
  return (
    <Layout title="Storage App | Hinzufügen" Heading="Hinzufügen">
      <CreateForm />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  connectDB();
  const session = await getSession({ req: context.req });
  // const user = await User.findOne({ name: session?.user?.name });
  // console.log(user);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default CreatePage;
