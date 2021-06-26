import Layout from "@/components/ui/Layout";
import Navigation from "@/components/inventar/Navigation";

import useSWR from "swr";
import { IItem } from "@/interfaces/Item";

const InventarPage = () => {
  const { data, error } = useSWR("/api/items") as { data: IItem[]; error: any };
  console.log(error, data);

  return (
    <Layout Heading="Inventar">
      {/* Navigation => Search Dropdown and Button */}
      <Navigation />
      {/* Table */}
      {/* Down line => Number of Items and Pagination */}
    </Layout>
  );
};

export default InventarPage;
