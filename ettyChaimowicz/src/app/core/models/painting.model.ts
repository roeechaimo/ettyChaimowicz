export enum PaintingType {
  SHOW = "show",
  ALBUM = "album"
}

// TODO - change external id type to number also in db
export class Painting {
  id: number;
  name: string;
  imageUrl: string;
  type: PaintingType;
  externalId: any;
}
