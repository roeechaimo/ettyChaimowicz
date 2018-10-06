import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Show } from "../../core/models/show.model";

@Component({
  selector: "app-single-show",
  templateUrl: "./single-show.component.html",
  styleUrls: ["./single-show.component.scss"]
})
export class SingleShowComponent implements OnInit {
  @Input()
  show: Show;

  constructor(private _router: Router) {}

  ngOnInit() {}

  public watchShow() {
    this._router.navigate(["/single-show-description", this.show.id]);
  }
}
