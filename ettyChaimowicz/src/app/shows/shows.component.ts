import { Component, OnInit } from "@angular/core";

import { SHOWS } from "../core/mocks/shows.mock";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  // TODO - get shows from server instead of mock
  public shows = SHOWS;

  constructor() {}

  ngOnInit() {}
}
