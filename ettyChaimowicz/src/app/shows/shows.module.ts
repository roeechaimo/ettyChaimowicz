import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ImageService } from "../services/image.service";
import { ShowsComponent } from "./shows.component";
import { SingleShowComponent } from "./single-show/single-show.component";
import { PreviewImageDialogComponent } from "../shared/components/preview-image-dialog/preview-image-dialog.component";

@NgModule({
  imports: [SharedModule],
  declarations: [ShowsComponent, SingleShowComponent],
  exports: [ShowsComponent, SingleShowComponent],
  providers: [ImageService],
  entryComponents: [PreviewImageDialogComponent]
})
export class ShowsModule {}
