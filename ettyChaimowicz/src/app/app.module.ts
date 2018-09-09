import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { GalleryModule } from "./gallery/gallery.module";
import { ShowsModule } from "./shows/shows.module";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    GalleryModule,
    ShowsModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule {}
