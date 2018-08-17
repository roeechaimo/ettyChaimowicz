import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
} from "@angular/material";

import { SidenavComponent } from "../components/sidenav/sidenav.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class MaterialModule {}
