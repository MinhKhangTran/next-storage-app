import { IItem } from "@/interfaces/Item";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/de";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import sample from "../../public/images/sample.jpeg";
import axios from "axios";
import { mutate } from "swr";

const Table = ({
  items,
  page,
}: {
  items: IItem[];
  page: string | string[] | undefined;
}) => {
  // console.log(items);

  const increaseAmount = async (_id: string) => {
    try {
      const { data } = await axios.put(`/api/items/menge/inc/${_id}`);
      if (data) {
        mutate(page ? `/api/items/?page=${page}` : "/api/items/page=1");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const decreaseAmount = async (_id: string) => {
    try {
      const { data } = await axios.put(`/api/items/menge/dec/${_id}`);
      if (data) {
        mutate(page ? `/api/items/?page=${page}` : "/api/items/page=1");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  if (!items) return <div>Lädt...</div>;
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Bild</th>
          <th>Name</th>
          <th>Menge</th>
          <th>Zuletzt geändert</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                {item.bild ? (
                  <Image
                    className="img"
                    src={item.bild.url}
                    width="70"
                    height="70"
                  />
                ) : (
                  <Image className="img" src={sample} width="70" height="70" />
                )}
              </td>
              <td>{item.name}</td>
              <td className="menge">
                <button
                  className="minus"
                  onClick={() => {
                    decreaseAmount(item._id);
                  }}
                >
                  <FaMinus />
                </button>
                {item.menge}
                <button
                  className="plus"
                  onClick={() => {
                    increaseAmount(item._id);
                  }}
                >
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
      </tbody>
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
  .img {
    border-radius: 50%;
  }

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
