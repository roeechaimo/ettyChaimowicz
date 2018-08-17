import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent }
];
