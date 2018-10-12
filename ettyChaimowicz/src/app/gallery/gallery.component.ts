import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

import { AngularFirestore } from "angularfire2/firestore";

import { Album } from "../core/models/album.model";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  public albums: Album[];

  constructor(private _router: Router, private _db: AngularFirestore) {}

  private albumsRef = this._db.collection("gallery");

  ngOnInit() {
    this.albumsInit();
  }

  public watchAlbum(album) {
    this._router.navigate(["/album", album.id]);
  }

  private albumsInit() {
    this.albumsRef.get().subscribe(data => {
      const albumsData: any = data.docs.map(doc => doc.data());
      this.albums = albumsData;
    });
  }
}
