import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ShowsComponent } from "./shows/shows.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SingleShowComponent } from "./shows/single-show/single-show.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "shows", component: ShowsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "single-show", component: SingleShowComponent }
];
