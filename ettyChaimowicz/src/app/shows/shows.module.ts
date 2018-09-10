import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ShowsComponent } from "./shows.component";
import { SingleShowComponent } from "./single-show/single-show.component";

@NgModule({
  imports: [SharedModule],
  declarations: [ShowsComponent, SingleShowComponent],
  exports: [ShowsComponent, SingleShowComponent]
})
export class ShowsModule {}
