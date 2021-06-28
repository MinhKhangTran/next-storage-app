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
import { useSearchStore } from "@/utils/store";

const InventarPage = () => {
  // console.log(error, data);
  const searchData = useSearchStore((state) => state.searchData);
  // console.log(searchData);
  const { data } = useSWR(
    searchData === "" ? "/api/items" : `/api/items?item=${searchData}`
  ) as { data: IItem[]; error: any };

  // const [session] = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);

  if (!data) return <Layout Heading="Inventar">Es lädt nocht...</Layout>;
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
