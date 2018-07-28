import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { AboutModule } from "./about/about.module";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AppModule {}
