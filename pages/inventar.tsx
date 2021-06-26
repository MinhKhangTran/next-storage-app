import Layout from "@/components/ui/Layout";
import Navigation from "@/components/inventar/Navigation";
import Table from "@/components/inventar/Table";

import useSWR from "swr";
import { IItem } from "@/interfaces/Item";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import styled from "styled-components";
import Pagination from "@/components/inventar/Pagination";

const InventarPage = () => {
  const { data, error } = useSWR("/api/items") as { data: IItem[]; error: any };
  console.log(error, data);
  // const [session] = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);

  return (
    <Layout Heading="Inventar">
      {/* Navigation => Search Dropdown and Button */}
      <Navigation />
      {/* Table */}
      <Table items={data} />
      {/* Down line => Number of Items and Pagination */}
      <StyledBottomLine>
        <p className="body-lg">{data.length} Items</p>
        <Pagination />
      </StyledBottomLine>
    </Layout>
  );
};

const StyledBottomLine = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export async function getServerSideProps(context: any) {
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
