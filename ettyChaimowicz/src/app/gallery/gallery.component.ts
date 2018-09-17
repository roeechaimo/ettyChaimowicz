import { Component, OnInit } from "@angular/core";

import { ALBUMS } from "../core/mocks/albums.mock";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  // TODO - get albums from server instead of mock
  public albums = ALBUMS;

  constructor() {}

  ngOnInit() {}
}
