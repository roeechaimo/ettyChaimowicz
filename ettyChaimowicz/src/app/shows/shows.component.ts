import { Component, OnInit } from "@angular/core";

import { AngularFirestore } from "angularfire2/firestore";

import { SHOWS } from "../core/mocks/shows.mock";
import { Show } from "../core/models/show.model";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  // TODO - get shows from server instead of mock
  public shows: Show[];

  constructor(private _db: AngularFirestore) {}

  private showsRef = this._db.collection("shows");

  ngOnInit() {
    this.showsInit();
  }

  private showsInit() {
    this.showsRef.get().subscribe(data => {
      // TODO - get rid of this ts error
      this.shows = data.docs.map(doc => doc.data());
    });
  }
}
