import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-preview-image-dialog",
  templateUrl: "./preview-image-dialog.component.html",
  styleUrls: ["./preview-image-dialog.component.scss"]
})
export class PreviewImageDialogComponent implements OnInit {
  // TODO - create models for dialog data, image, show...
  public image: any;

  constructor(
    private _dialogRef: MatDialogRef<PreviewImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  ngOnInit() {
    this.image = this._data;
  }

  public closeDialog() {
    this._dialogRef.close();
  }
}
