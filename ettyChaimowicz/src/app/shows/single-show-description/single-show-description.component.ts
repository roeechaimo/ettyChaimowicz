import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

import { PreviewImageDialogComponent } from "../../shared/components/preview-image-dialog/preview-image-dialog.component";
import { SHOWS } from "../../core/mocks/shows.mock";

@Component({
  selector: "app-single-show-description",
  templateUrl: "./single-show-description.component.html",
  styleUrls: ["./single-show-description.component.scss"]
})
export class SingleShowDescriptionComponent implements OnInit {
  // TODO - make dynamic and import show from shows component with image.service
  public show: {} = {};

  private shows = SHOWS;

  constructor(
    private _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this.show = this.shows.find(show => {
        return show.id === +id;
      });
    });
  }

  public back() {
    this._router.navigate(["/shows"]);
  }

  public previewImage(painting) {
    const dialogRef = this._dialog.open(PreviewImageDialogComponent, {
      data: painting
    });
  }
}
