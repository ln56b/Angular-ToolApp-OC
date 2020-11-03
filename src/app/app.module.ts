import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolComponent } from "./tool/tool.component";

import { ToolService } from "./services/tool.service";
import { AuthComponent } from "./auth/auth.component";
import { ToolViewComponent } from "./tool-view/tool-view.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { SingleToolComponent } from "./single-tool/single-tool.component";
import { AuthGuard } from "./services/auth-guard.service";
import { EditToolComponent } from "./edit-tool/edit-tool.component";

const appRoutes: Routes = [
  { path: "tools", canActivate: [AuthGuard], component: ToolViewComponent },
  {
    path: "tools/:id",
    canActivate: [AuthGuard],
    component: SingleToolComponent,
  },
  {
    path: "edit",
    canActivate: [AuthGuard],
    component: EditToolComponent,
  },
  { path: "auth", component: AuthComponent },
  { path: "", component: ToolViewComponent },
  { path: "**", redirectTo: "/tools" },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    AuthComponent,
    ToolViewComponent,
    SingleToolComponent,
    EditToolComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ToolService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
