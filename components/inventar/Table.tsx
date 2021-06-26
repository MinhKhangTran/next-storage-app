import { IItem } from "@/interfaces/Item";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/de";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import sample from "../../public/images/sample.jpeg";

const Table = ({ items }: { items: IItem[] }) => {
  if (!items) return <div>Es lädt noch ...</div>;
  return (
    <StyledTable>
      <tr>
        <th>Bild</th>
        <th>Name</th>
        <th>Menge</th>
        <th>Zuletzt geändert</th>
      </tr>
      {items.map((item) => {
        return (
          <tr key={item._id}>
            <td>
              {item.bild ? (
                <Image src={item.bild.url} width="50" height="50" />
              ) : (
                <Image src={sample} width="50" height="50" />
              )}
            </td>
            <td>{item.name}</td>
            <td className="menge">
              <button className="minus">
                <FaMinus />
              </button>
              {item.menge}
              <button className="plus">
                <FaPlus />
              </button>
            </td>
            <td>
              <Moment locale="de" fromNow>
                {item.updatedAt}
              </Moment>
            </td>
          </tr>
        );
      })}
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  border: 1px solid var(--primary-100);

  td,
  th {
    /* border: 1px solid var(--grey-200); */
    padding: 0.5rem;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: var(--primary-200);
    color: var(--primary-800);
  }
  td {
    text-align: center;
    vertical-align: middle;
  }
  /* tr {
    transition: var(--transition);
    &:hover {
      background-color: var(--primary-100);
    }
  } */

  .menge {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
  }
  button {
    background: transparent;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .minus {
    color: var(--red-dark);
    border: 1px solid var(--red-dark);
    &:hover {
      background-color: var(--red-dark);
      color: var(--red-light);
    }
  }
  .plus {
    color: var(--green-dark);
    border: 1px solid var(--green-dark);
    &:hover {
      background-color: var(--green-dark);
      color: var(--green-light);
    }
  }
`;

export default Table;
