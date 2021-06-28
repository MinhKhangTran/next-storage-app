import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import { Button } from "../ui/Button";

interface IPaginationProps {
  firstPage: boolean;
  lastPage: boolean;
  prevPage: string;
  nextPage: string;
}

const Pagination = ({
  firstPage,
  lastPage,
  prevPage,
  nextPage,
}: IPaginationProps) => {
  const router = useRouter();
  return (
    <ButtonGroup>
      <Button
        outline
        disabled={firstPage}
        onClick={() => {
          router.push(prevPage);
        }}
      >
        Vorherige
      </Button>

      <Button
        outline
        disabled={lastPage}
        onClick={() => {
          router.push(nextPage);
        }}
      >
        Nächste
      </Button>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export default Pagination;
