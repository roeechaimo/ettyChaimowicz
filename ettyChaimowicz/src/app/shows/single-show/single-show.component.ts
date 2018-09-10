import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-single-show",
  templateUrl: "./single-show.component.html",
  styleUrls: ["./single-show.component.scss"]
})
export class SingleShowComponent implements OnInit {
  // TODO - make dynamic and import show from shows component

  // @Input() show;

  public show: {} = {
    title: "shit",
    description: "desc-shit",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  };

  constructor() {}

  ngOnInit() {}
}
