import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  public shows = [
    {
      title: "Show number 1",
      imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "This was show 1 blah blah blah.",
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
    },
    {
      title: "Show number 2",
      imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      description: "This was show 2 blah blah blah.",
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
    }
  ];

  constructor(private _router: Router) {}

  ngOnInit() {}

  public watchShow() {
    this._router.navigate(["/single-show"]);
  }
}
