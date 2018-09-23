import { Painting } from "./painting.model";

export class Show {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  paintings: Painting[];
}
