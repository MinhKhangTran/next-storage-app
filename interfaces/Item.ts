export interface IImage {
  public_id: string;
  url: string;
}
export interface IItem {
  _id: string;
  name: string;
  menge: number;
  bild: IImage;
  updatedAt: string;
}
