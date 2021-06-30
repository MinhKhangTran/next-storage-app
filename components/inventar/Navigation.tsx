import { Button } from "@/components/ui/Button";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import Search from "./Search";

const Navigation = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <div className="filter">
        <Search />
        {/* <div className="form-control">
          <label>Filtern nach</label>
          <select name="items" id="items">
            <option value="name">Name</option>
            <option value="menge">Menge</option>
            <option value="datum">Datum</option>
          </select>
        </div> */}
      </div>

      <Button
        onClick={() => {
          router.push("/create");
        }}
      >
        Hinzufügen
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filter {
    display: flex;
    align-items: center;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }
  label {
    margin-bottom: 0.125rem;
  }
  input,
  select {
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    padding: 0.25rem;
    border: solid 1px var(--primary-500);
  }
  @media screen and (max-width: 768px) {
    input,
    select {
      font-size: 0.9rem;
    }
  }
`;

export default Navigation;
