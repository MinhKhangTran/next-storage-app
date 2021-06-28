import create, { SetState } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchState {
  searchData: string;
  setSearchData: (searchData: string) => void;
}

let searchStore = (set: SetState<any>) => ({
  searchData: "",
  setSearchData: (searchData: string) => set(() => ({ searchData })),
});

export const useSearchStore = create(devtools<SearchState>(searchStore));
