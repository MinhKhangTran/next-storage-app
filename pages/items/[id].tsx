import { connectDB } from "@/config/db";

import { getSession } from "next-auth/client";

import Layout from "@/components/ui/Layout";
import CreateForm from "@/components/create/CreateForm";

import { IItem } from "@/interfaces/Item";
import { useRouter } from "next/dist/client/router";
import { useItemStore } from "@/utils/store";
import { useEffect } from "react";

const SinglePage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const item = useItemStore((state) => state.item) as IItem;
  const fetchItem = useItemStore((state) => state.fetchItem);
  // const { data } = useSWR(`/api/items/${router.query.id}`) as { data: IItem };

  useEffect(() => {
    fetchItem(id);
  }, []);

  return (
    <Layout title="Storage App | Ändern" Heading="Ändern">
      <CreateForm item={item} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  connectDB();
  const session = await getSession({ req: context.req });

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

export default SinglePage;
