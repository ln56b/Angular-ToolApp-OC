import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolComponent } from "./tool/tool.component";

import { ToolService } from "./services/tool.services";
import { AuthComponent } from "./auth/auth.component";
import { ToolViewComponent } from "./tool-view/tool-view.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "tools", component: ToolViewComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: ToolViewComponent },
];

@NgModule({
  declarations: [AppComponent, ToolComponent, AuthComponent, ToolViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ToolService],
  bootstrap: [AppComponent],
})
export class AppModule {}
