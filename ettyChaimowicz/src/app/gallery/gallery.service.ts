import { Injectable } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  private albumsRef = this._db.collection("gallery");

  constructor(private _db: AngularFirestore) {}

  // TODO - return an observable
  public showAlbums() {
    this.albumsRef.get().subscribe(data => {
      const albumsData: any = data.docs.map(doc => doc.data());

      return albumsData;
    });
  }
}
