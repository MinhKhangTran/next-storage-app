import { useSearchStore } from "@/utils/store";

import styled from "styled-components";

const Search = () => {
  const searchData = useSearchStore((state) => state.searchData);
  const setSearchData = useSearchStore((state) => state.setSearchData);
  // console.log(searchData);
  // const [searchData, setSearchData] = useState("");

  // useEffect(() => {
  //   const getResults = async () => {
  //     if (searchData === "") {
  //       setSearchResult([]);
  //     } else {
  //       const { data } = await axios.get(`/api/items?item=${searchData}`);
  //       setSearchResult(data);
  //     }
  //   };
  //   getResults();
  // }, [searchData]);
  // console.log(searchResult);

  return (
    <StyledSearch className="form-control">
      <label>Suche...</label>
      <input
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        type="text"
      ></input>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  .form-control {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }
`;

export default Search;
