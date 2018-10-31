import { Injectable } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  private albumsRef = this._db.collection("gallery");

  constructor(private _db: AngularFirestore) {}

  // TODO - use this also for shows components
  public showAlbums() {
    return this.albumsRef.get();
  }
}
