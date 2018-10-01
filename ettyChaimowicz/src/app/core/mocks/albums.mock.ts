import { PaintingType } from "../models/painting.model";

export const ALBUMS = [
  {
    id: 1,
    title: "Album number 1",
    description: "1 blah blah",
    paintings: [
      {
        id: 9,
        name: "nine",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785490/user_photos/ettyChaimowicz/gallery/1/paintings/black-background.jpg",
        type: PaintingType.ALBUM,
        externalId: 1
      },
      {
        id: 10,
        name: "ten",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785487/user_photos/ettyChaimowicz/gallery/1/paintings/apple.jpg",
        type: PaintingType.ALBUM,
        externalId: 1
      },
      {
        id: 11,
        name: "eleven",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785487/user_photos/ettyChaimowicz/gallery/1/paintings/burger.jpg",
        type: PaintingType.ALBUM,
        externalId: 1
      },
      {
        id: 12,
        name: "four",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785484/user_photos/ettyChaimowicz/gallery/1/paintings/back.jpg",
        type: PaintingType.ALBUM,
        externalId: 1
      }
    ]
  },
  {
    id: 2,
    title: "Album number 2",
    description: "2 blah blah",
    paintings: [
      {
        id: 13,
        name: "one",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785482/user_photos/ettyChaimowicz/gallery/2/paintings/eye.jpg",
        type: PaintingType.ALBUM,
        externalId: 2
      },
      {
        id: 14,
        name: "two",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785482/user_photos/ettyChaimowicz/gallery/2/paintings/body.jpg",
        type: PaintingType.ALBUM,
        externalId: 2
      },
      {
        id: 15,
        name: "three",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785481/user_photos/ettyChaimowicz/gallery/2/paintings/bird.jpg",
        type: PaintingType.ALBUM,
        externalId: 2
      },
      {
        id: 16,
        name: "four",
        imageUrl:
          "https://res.cloudinary.com/dwvfucbtk/image/upload/v1537785480/user_photos/ettyChaimowicz/gallery/2/paintings/diamond.jpg",
        type: PaintingType.ALBUM,
        externalId: 2
      }
    ]
  },
  {
    id: 3,
    title: "Album number 3",
    description: "3 blah blah",
    paintings: [
      {
        id: 17,
        name: "one",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        type: PaintingType.ALBUM,
        externalId: 3
      },
      {
        id: 18,
        name: "two",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        type: PaintingType.ALBUM,
        externalId: 3
      },
      {
        id: 19,
        name: "three",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        type: PaintingType.ALBUM,
        externalId: 3
      },
      {
        id: 20,
        name: "four",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        type: PaintingType.ALBUM,
        externalId: 3
      }
    ]
  }
];
