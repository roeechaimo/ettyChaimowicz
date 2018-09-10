import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ShowsComponent } from "./shows.component";

@NgModule({
  imports: [SharedModule],
  declarations: [ShowsComponent],
  exports: [ShowsComponent]
})
export class ShowsModule {}
