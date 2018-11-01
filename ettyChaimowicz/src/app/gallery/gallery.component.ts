import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

import { Album } from "../core/models/album.model";
import { GalleryService } from "./gallery.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  public albums: Album[];

  constructor(
    private _router: Router,
    private _galleryservice: GalleryService
  ) {}

  ngOnInit() {
    this.albumsInit();
  }

  public watchAlbum(album) {
    this._router.navigate(["/album", album.id]);
  }

  private albumsInit() {
    this._galleryservice.showAlbums().subscribe(data => {
      const albumsData: any = data.docs.map(doc => doc.data());

      this.albums = albumsData;
    });

    // i've used it here just to update a new "gallery_prod" collection
    // this._galleryservice.setDb();
  }
}
