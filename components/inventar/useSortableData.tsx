// https://www.smashingmagazine.com/2020/03/sortable-tables-react/
import { useMemo, useState } from "react";

export const useSortableData = (array: any[], config = null) => {
  const [sortConfig, setSortConfig] = useState<any>(config);

  //useMeme to change
  const sortedItems = useMemo(() => {
    //copy items array
    let sortableItems = [...array];
    //if sortConfig is clicked
    if (sortConfig !== null) {
      //sort by key here: name, menge and datum
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [array, sortConfig]);

  //asc vs desc
  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { array: sortedItems, requestSort, sortConfig };
};
