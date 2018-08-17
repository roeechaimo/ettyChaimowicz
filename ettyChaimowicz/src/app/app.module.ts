import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule {}
