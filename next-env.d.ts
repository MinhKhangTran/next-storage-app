/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />
import { IncomingMessage } from "http";
declare module "next" {
  export interface NextApiRequest extends IncomingMessage {
    user: {
      _id: any;
      name: string;
      image: string;
      createdAt: any;
      updatedAt: any;
    };
  }
}
