export interface IItem {
  _id: string;
  name: string;
  menge: number;
  bild: {
    public_id: string;
    url: string;
  };
  updatedAt: string;
}
