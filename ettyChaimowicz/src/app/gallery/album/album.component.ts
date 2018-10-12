import { Component, OnInit } from "@angular/core";
import { MatDialog } from "../../../../node_modules/@angular/material";
import {
  ActivatedRoute,
  Router
} from "../../../../node_modules/@angular/router";

import { PreviewImageDialogComponent } from "../../shared/components/preview-image-dialog/preview-image-dialog.component";
import { Painting } from "../../core/models/painting.model";
import { Album } from "../../core/models/album.model";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
  public album: Album;

  private albums: Album[];

  constructor(
    private _dialog: MatDialog,
    private _db: AngularFirestore,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  private albumsRef = this._db.collection("gallery");

  ngOnInit() {
    this.albumsInit();
  }

  public back() {
    this._router.navigate(["/gallery"]);
  }

  public previewImage(painting: Painting) {
    const dialogRef = this._dialog.open(PreviewImageDialogComponent, {
      data: painting
    });
  }

  private albumsInit() {
    this.albumsRef.get().subscribe(data => {
      const albumsData: any = data.docs.map(doc => doc.data());
      this.albums = albumsData;

      this.routerParamsInit();
    });
  }

  private routerParamsInit() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this.album = this.albums.find(album => {
        return album.id === +id;
      });
    });
  }
}
