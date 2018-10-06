import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

import { AngularFirestore } from "angularfire2/firestore";

import { PreviewImageDialogComponent } from "../../shared/components/preview-image-dialog/preview-image-dialog.component";
import { Show } from "../../core/models/show.model";
import { Painting } from "../../core/models/painting.model";

@Component({
  selector: "app-single-show-description",
  templateUrl: "./single-show-description.component.html",
  styleUrls: ["./single-show-description.component.scss"]
})
export class SingleShowDescriptionComponent implements OnInit {
  public show: Show;

  private shows: Show[];

  constructor(
    private _dialog: MatDialog,
    private _db: AngularFirestore,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  private showsRef = this._db.collection("shows");

  ngOnInit() {
    this.showsInit();
  }

  public back() {
    this._router.navigate(["/shows"]);
  }

  public previewImage(painting: Painting) {
    const dialogRef = this._dialog.open(PreviewImageDialogComponent, {
      data: painting
    });
  }

  private showsInit() {
    this.showsRef.get().subscribe(data => {
      // TODO - get rid of this ts error
      this.shows = data.docs.map(doc => doc.data());

      this.routerParamsInit();
    });
  }

  private routerParamsInit() {
    this._route.params.subscribe(params => {
      const { id } = params;
      this.show = this.shows.find(show => {
        return show.id === +id;
      });
    });
  }
}
