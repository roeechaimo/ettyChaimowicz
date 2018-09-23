class PaintingType {
  SHOW = "show";
  ALBUM = "album";
}

// const PaintingType = ['show', 'album'];

export class Painting {
  id: number;
  name: string;
  imageUrl: string;
  type: PaintingType;
  externalId: number;
}
