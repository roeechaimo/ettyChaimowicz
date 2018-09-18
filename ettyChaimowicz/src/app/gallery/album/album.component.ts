import { Component, OnInit } from "@angular/core";
import { MatDialog } from "../../../../node_modules/@angular/material";
import {
  ActivatedRoute,
  Router
} from "../../../../node_modules/@angular/router";

import { PreviewImageDialogComponent } from "../../shared/components/preview-image-dialog/preview-image-dialog.component";
import { ALBUMS } from "../../core/mocks/albums.mock";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
  // TODO - make dynamic and import show from shows component with image.service
  public album: {} = {};

  private albums = ALBUMS;

  constructor(
    private _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this.album = this.albums.find(album => {
        return album.id === +id;
      });
    });
  }

  public back() {
    this._router.navigate(["/gallery"]);
  }

  public previewImage(painting) {
    const dialogRef = this._dialog.open(PreviewImageDialogComponent, {
      data: painting
    });
  }
}
