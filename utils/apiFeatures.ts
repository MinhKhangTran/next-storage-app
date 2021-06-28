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
  paginate(resPerPage: number) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}
