import styled from "styled-components";
import { Button } from "../ui/Button";

const Pagination = () => {
  return (
    <ButtonGroup>
      <Button outline>Vorherige</Button>
      <Button outline>Nächste</Button>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export default Pagination;
