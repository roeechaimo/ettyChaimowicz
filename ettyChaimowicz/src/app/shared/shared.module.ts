import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material/material.module";
import { MatSidenavModule } from "../../../node_modules/@angular/material";

import { SidenavComponent } from "./components/sidenav/sidenav.component";

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule, MatSidenavModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SharedModule {}
