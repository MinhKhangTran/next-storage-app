import * as Yup from "yup";

export const itemSchema = Yup.object({
  name: Yup.string().required("Bitte einen Namen eingeben"),
  menge: Yup.number().required("Bitte eine Menge eingeben"),
  //Bild
});
