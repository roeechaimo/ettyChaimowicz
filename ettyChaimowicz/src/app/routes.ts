import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ShowsComponent } from "./shows/shows.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SingleShowDescriptionComponent } from "./shows/single-show-description/single-show-description.component";
import { AlbumComponent } from "./gallery/album/album.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "shows", component: ShowsComponent },
  { path: "contact-us", component: ContactUsComponent },
  {
    path: "single-show-description/:id",
    component: SingleShowDescriptionComponent
  },
  { path: "album/:id", component: AlbumComponent }
];
