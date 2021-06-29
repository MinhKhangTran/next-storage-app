import { connectDB } from "@/config/db";

import { getSession } from "next-auth/client";

import Layout from "@/components/ui/Layout";
import CreateForm from "@/components/create/CreateForm";
import useSWR from "swr";
import { IItem } from "@/interfaces/Item";
import { useRouter } from "next/dist/client/router";

const CreatePage = () => {
  const router = useRouter();
  const { data } = useSWR(`/api/items/${router.query.id}`) as { data: IItem };
  //   console.log(data);

  return (
    <Layout Heading="Ändern">
      <CreateForm item={data} />
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
