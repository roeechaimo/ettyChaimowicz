import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { GalleryComponent } from "./gallery.component";

@NgModule({
  imports: [SharedModule],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule {}
