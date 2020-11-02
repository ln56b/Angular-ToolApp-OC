import { Component, OnInit } from "@angular/core";
import { ToolService } from "../services/tool.service";

@Component({
  selector: "app-tool-view",
  templateUrl: "./tool-view.component.html",
  styleUrls: ["./tool-view.component.scss"],
})
export class ToolViewComponent implements OnInit {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  tools: any[];
  isAuth = false;

  constructor(private toolService: ToolService) {}

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
