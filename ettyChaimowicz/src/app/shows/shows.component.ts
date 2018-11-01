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
  public shows: Show[];

  constructor(private _db: AngularFirestore) {}

  private showsRef = this._db.collection("shows");

  ngOnInit() {
    this.showsInit();
  }

  // TODO - create shows service with getShows and setDb methods
  private showsInit() {
    this.showsRef.get().subscribe(data => {
      const showsData: any = data.docs.map(doc => doc.data());
      this.shows = showsData;
    });
  }
}
