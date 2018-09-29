import { Component, OnInit } from "@angular/core";

import { NguCarouselConfig } from "@ngu/carousel";

import { ALBUMS } from "../core/mocks/albums.mock";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: false
    },
    load: 2,
    loop: true,
    touch: true
  };
  public albums = ALBUMS;
  public carouselItems = [
    this.albums[0].paintings[0].imageUrl,
    this.albums[0].paintings[1].imageUrl,
    this.albums[0].paintings[2].imageUrl,
    this.albums[0].paintings[3].imageUrl
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: []
  };

  constructor() {}

  ngOnInit() {}
}
