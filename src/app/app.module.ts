import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolComponent } from './tool/tool.component';

import { ToolService } from './services/tool.services'

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ToolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
