import { IItem } from "@/interfaces/Item";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/de";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import sample from "../../public/images/sample.jpeg";
import axios from "axios";
import { mutate } from "swr";
import Link from "next/link";
import { useSortableData } from "./useSortableData";

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

  // //filtering

  // const copyItems = [...items];
  // const [filterName, setFilterName] = useState(false);
  // const [filterMenge, setFilterMenge] = useState(false);
  // const [filterDatum, setFilterDatum] = useState(false);

  // //Filter by Name
  // if (filterName) {
  //   copyItems.sort((a, b) => a.name.localeCompare(b.name));
  // } else {
  //   copyItems.sort((a, b) => b.name.localeCompare(a.name));
  // }
  // //Filter by Menge
  // if (filterMenge) {
  //   copyItems.sort((a, b) => a.menge - b.menge);
  // } else {
  //   copyItems.sort((a, b) => b.menge - a.menge);
  // }
  // //Filter by Datum
  // if (filterDatum) {
  //   copyItems.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
  // } else {
  //   copyItems.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  // }
  // console.log(copyItems);

  //Filtering
  const { array, requestSort, sortConfig } = useSortableData(items);

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  if (!items) return <div>Lädt...</div>;
  if (items.length === 0)
    return (
      <h3 style={{ marginTop: "2rem", color: "var(--red-dark)" }}>
        Kein Item mit diesem Namen gefunden
      </h3>
    );
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Bild</th>
          <th>
            Name{" "}
            <span
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              🔽
            </span>
          </th>
          <th>
            Menge{" "}
            <span
              onClick={() => requestSort("menge")}
              className={getClassNamesFor("menge")}
            >
              🔽
            </span>
          </th>
          <th className="mobile">
            Zuletzt geändert{" "}
            <span
              onClick={() => requestSort("updatedAt")}
              className={getClassNamesFor("updatedAt")}
            >
              🔽
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {array.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                {item.bild ? (
                  <Link href={`/items/${item._id}`}>
                    <Image
                      className="img"
                      src={item.bild.url}
                      width="70"
                      height="70"
                    />
                  </Link>
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
                <p className={`${item.menge <= 3 ? "danger" : ""} menge__text`}>
                  {item.menge}
                </p>
                <button
                  className="plus"
                  onClick={() => {
                    increaseAmount(item._id);
                  }}
                >
                  <FaPlus />
                </button>
              </td>
              <td className="mobile">
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
  span {
    cursor: pointer;
  }

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
    margin-top: 1.5rem;
    .menge__text {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 700;
    }
    .danger {
      color: var(--red-dark);
    }
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
