import { Injectable } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";

import { ALBUMS } from "../core/mocks/albums.mock";
import { error } from "protractor";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  private albumsRef = this._db.collection("gallery_prod");
  private albums = ALBUMS;

  constructor(private _db: AngularFirestore) {}

  public showAlbums() {
    return this.albumsRef.get();
  }

  public setDb() {
    const galleryProdRef = this._db.collection("gallery_prod");

    this.albums.map(album => {
      galleryProdRef
        .doc(album.id.toString())
        .set(album)
        .then(res => console.log(res + " success"))
        .catch(error => console.log(error));
    });
  }
}
