import { IItem } from "@/interfaces/Item";
import axios from "axios";
import create, { SetState } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchState {
  searchData: string;
  setSearchData: (searchData: string) => void;
}

interface ItemState {
  item: null | IItem;
  fetchItem: (id: string) => void;
}

let searchStore = (set: SetState<any>) => ({
  searchData: "",
  setSearchData: (searchData: string) => set(() => ({ searchData })),
});

let itemStore = (set: SetState<any>) => ({
  item: null,
  fetchItem: async (id: string) => {
    const { data } = await axios.get(`/api/items/${id}`);
    set({ item: data });
  },
});

export const useSearchStore = create(devtools<SearchState>(searchStore));
export const useItemStore = create(devtools<ItemState>(itemStore));
