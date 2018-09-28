import { Component, OnInit } from "@angular/core";

import { NguCarousel, NguCarouselStore } from "@ngu/carousel";

import { ALBUMS } from "../core/mocks/albums.mock";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public carouselBanner;
  public albums = ALBUMS;
  public imgags = [
    this.albums[0].paintings[0],
    this.albums[0].paintings[1],
    this.albums[0].paintings[2],
    this.albums[0].paintings[3]
  ];

  constructor() {}

  ngOnInit() {
    // TODO - implement carousle properly
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: {
        timing: 3000,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 2,
      loop: true,
      touch: true
    };
    this.initCarousleBanner();
  }

  private initCarousleBanner() {
    // this.carouselBanner = {
    //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //   slide: 1,
    //   speed: 400,
    //   interval: {
    //     timing: 3000,
    //     initialDelay: 1000
    //   },
    //   point: {
    //     visible: true
    //   },
    //   load: 2,
    //   loop: true,
    //   touch: true
    // };
  }
}
