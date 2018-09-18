import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-single-show",
  templateUrl: "./single-show.component.html",
  styleUrls: ["./single-show.component.scss"]
})
export class SingleShowComponent implements OnInit {
  @Input()
  show;
  // TODO - make dynamic and import show from shows component with image.service

  constructor(private _router: Router) {}

  ngOnInit() {}

  // TODO - navigate and pass show data to single show component
  public watchShow() {
    this._router.navigate(["/single-show-description", this.show.id]);
  }
}
