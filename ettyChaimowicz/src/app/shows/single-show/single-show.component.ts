import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "../../../../node_modules/@angular/material";
import { PreviewImageDialogComponent } from "../../shared/components/preview-image-dialog/preview-image-dialog.component";

@Component({
  selector: "app-single-show",
  templateUrl: "./single-show.component.html",
  styleUrls: ["./single-show.component.scss"]
})
export class SingleShowComponent implements OnInit {
  // TODO - make dynamic and import show from shows component

  public show: {} = {
    id: 1,
    title: "Show number one",
    description: "desc-shit",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    paintings: [
      {
        name: "one",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        name: "two",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        name: "three",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        name: "four",
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
      }
    ]
  };

  constructor(private _dialog: MatDialog) {}

  ngOnInit() {}

  public previewImage(painting) {
    const dialogRef = this._dialog.open(PreviewImageDialogComponent, {
      data: painting
    });
  }
}
