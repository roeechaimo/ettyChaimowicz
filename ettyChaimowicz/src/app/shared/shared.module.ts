import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NguCarouselModule } from "@ngu/carousel";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";

import { environment } from "../../environments/environment";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material/material.module";
import { MatSidenavModule } from "@angular/material";

import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { PreviewImageDialogComponent } from "./components/preview-image-dialog/preview-image-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    NguCarouselModule,
    AppRoutingModule,
    MaterialModule,
    MatSidenavModule
  ],
  declarations: [SidenavComponent, PreviewImageDialogComponent],
  exports: [SidenavComponent, MaterialModule, NguCarouselModule]
})
export class SharedModule {}
