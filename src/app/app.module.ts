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

const appRoutes: Routes = [
  { path: "tools", component: ToolViewComponent },
  { path: "tools/:id", component: SingleToolComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: ToolViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    AuthComponent,
    ToolViewComponent,
    SingleToolComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ToolService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
