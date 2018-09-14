import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material/material.module";
import { MatSidenavModule } from "@angular/material";

import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { PreviewImageDialogComponent } from "./components/preview-image-dialog/preview-image-dialog.component";

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule, MatSidenavModule],
  declarations: [SidenavComponent, PreviewImageDialogComponent],
  exports: [SidenavComponent, MaterialModule]
})
export class SharedModule {}
