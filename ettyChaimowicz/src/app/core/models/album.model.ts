import { Painting } from "./painting.model";

export class Album {
  id: number;
  title: string;
  description: string;
  paintings: Painting[];
}
