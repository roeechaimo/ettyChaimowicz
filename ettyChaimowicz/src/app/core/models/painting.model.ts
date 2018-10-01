export enum PaintingType {
  SHOW = "show",
  ALBUM = "album"
}

export class Painting {
  id: number;
  name: string;
  imageUrl: string;
  type: PaintingType;
  externalId: number;
}
