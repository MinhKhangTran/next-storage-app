import Layout from "@/components/ui/Layout";
import Navigation from "@/components/inventar/Navigation";
import Table from "@/components/inventar/Table";

import useSWR from "swr";
import { IItem } from "@/interfaces/Item";
import { getSession } from "next-auth/client";

const InventarPage = () => {
  const { data, error } = useSWR("/api/items") as { data: IItem[]; error: any };
  console.log(error, data);

  return (
    <Layout Heading="Inventar">
      {/* Navigation => Search Dropdown and Button */}
      <Navigation />
      {/* Table */}
      <Table items={data} />
      {/* Down line => Number of Items and Pagination */}
    </Layout>
  );
};

export async function getServerSidePorps(context: any) {
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

export default InventarPage;
