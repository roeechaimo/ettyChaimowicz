import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { GalleryComponent } from "./gallery.component";
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [SharedModule],
  declarations: [GalleryComponent, AlbumComponent],
  exports: [GalleryComponent]
})
export class GalleryModule {}
