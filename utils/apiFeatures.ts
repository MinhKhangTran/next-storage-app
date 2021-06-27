//create a class APIFeatures
export class APIFeatures {
  query: any;
  queryStr: any;
  //constructur with these parameters
  constructor(query: any, queryStr: any) {
    (this.query = query), (this.queryStr = queryStr);
  }
  //SEARCH
  search() {
    const item = this.queryStr.item
      ? {
          name: {
            $regex: this.queryStr.item,
          },
        }
      : {};
    this.query = this.query.find({ ...item });
    return this;
  }

  //FILTER

  //PAGINATE
}
