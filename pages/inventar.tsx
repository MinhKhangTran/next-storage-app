import Layout from "@/components/ui/Layout";
import Navigation from "@/components/inventar/Navigation";
import Table from "@/components/inventar/Table";

import useSWR, { useSWRInfinite } from "swr";
import { IItem, IPaginateItems } from "@/interfaces/Item";
import { getSession } from "next-auth/client";

import styled from "styled-components";
import Pagination from "@/components/inventar/Pagination";
import { useSearchStore } from "@/utils/store";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { resPerPage } from "../config";

const InventarPage = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState<IPaginateItems[]>([]);
  const searchData = useSearchStore((state) => state.searchData);
  //get page from query
  const { page } = router.query;

  const { data } = useSWR(
    page ? `/api/items/?page=${page}` : `/api/items/?page=1`
  ) as {
    data: IPaginateItems;
  };

  useEffect(() => {
    const getResults = async () => {
      if (searchData === "") {
        setSearchResult([]);
      } else {
        const { data } = await axios.get(`/api/items?item=${searchData}`);
        setSearchResult(data);
      }
    };
    getResults();
  }, [searchData]);

  //total pages, lastpage, prev page, nextpage
  const totalPages = Math.ceil(data?.itemCount / resPerPage);
  const firstPage = Number(page) === 1;
  const lastPage = Number(page) === totalPages;
  const prevPage = `/inventar/?page=${Number(page) - 1}`;
  const nextPage = `/inventar/?page=${Number(page) + 1}`;

  useEffect(() => {
    router.push("/inventar/?page=1");
  }, []);

  if (!data || !searchResult)
    return <Layout Heading="Inventar">Es lädt noch...</Layout>;
  return (
    <Layout Heading="Inventar">
      {/* Navigation => Search Dropdown and Button */}
      <Navigation />
      {/* Table */}
      <Table
        items={
          searchData
            ? //@ts-expect-error
              searchResult.items
            : data.items
        }
      />
      {/* Down line => Number of Items and Pagination */}
      <StyledBottomLine>
        <p className="body-lg">{data.itemCount} Items</p>
        {totalPages > 1 && (
          <Pagination
            firstPage={firstPage}
            lastPage={lastPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
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
