// 5. Add variables to be used in html
// 7. Create setTimeOut to modify auth status
// 9. Create switchOn method to be used on click in html

import { Component, OnInit } from "@angular/core";
import { ToolService } from "./services/tool.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  tools: any[];

  constructor(private toolService: ToolService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.tools = this.toolService.tools;
  }

  onSwitchOn() {
    this.toolService.switchOnAll();
  }

  onSwitchOff() {
    if (confirm("Are you sure you want to switch off all tools ?")) {
      this.toolService.switchOffAll();
    } else {
      return null;
    }
  }
}
