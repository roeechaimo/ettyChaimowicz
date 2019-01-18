import { Component, OnInit } from "@angular/core";

import { NguCarouselConfig } from "@ngu/carousel";

import { Album } from "../core/models/album.model";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

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
  public isLoading: boolean = false;
  public albums: Album[];
  public carouselItems: Array<any> = [];
  public carouselTileItems: Array<any>;
  public carouselTiles;

  private albumsRef = this._db.collection("gallery");

  constructor(private _db: AngularFirestore) {}

  ngOnInit() {
    this.albumsInit();
  }

  // TODO - set new collection in db for the carousle and import images from it
  private albumsInit() {
    this.isLoading = true;

    this.albumsRef.get().subscribe(data => {
      const albumsData: any = data.docs.map(doc => doc.data());
      this.albums = albumsData;

      this.carousleItemsInit();
    });
  }

  private carousleItemsInit() {
    this.carouselItems = [
      this.albums[0].paintings[0].imageUrl,
      this.albums[0].paintings[1].imageUrl,
      this.albums[0].paintings[2].imageUrl,
      this.albums[0].paintings[3].imageUrl
    ];

    this.carouselTileItems = [0, 1, 2, 3];

    this.carouselTiles = {
      0: [],
      1: [],
      2: [],
      3: []
    };

    this.isLoading = false;
  }
}
