import Layout from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import useSWR from "swr";
import { IItem } from "@/interfaces/Item";

const InventarPage = () => {
  const { data, error } = useSWR("/api/items") as { data: IItem[]; error: any };
  console.log(error, data);

  return (
    <Layout Heading="Inventar">
      {/* Top line => Search Dropdown and Button */}
      <div className="top-line">
        <div className="form-control">
          <label>Suche...</label>
          <input></input>
        </div>
        <div className="form-control">
          <label>Filtern nach</label>
          <select name="items" id="items">
            <option value="name">Name</option>
            <option value="menge">Menge</option>
            <option value="datum">Datum</option>
          </select>
        </div>

        <Button>Neues Item hinzufügen</Button>
      </div>
      {/* Table */}
      {/* Down line => Number of Items and Pagination */}
    </Layout>
  );
};

export default InventarPage;
