import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ToolService } from "../services/tool.service";

@Component({
  selector: "app-tool-view",
  templateUrl: "./tool-view.component.html",
  styleUrls: ["./tool-view.component.scss"],
})
export class ToolViewComponent implements OnInit, OnDestroy {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  tools: any[];
  toolSubscription: Subscription;

  isAuth = false;

  constructor(private toolService: ToolService) {}

  ngOnInit() {
    this.toolSubscription = this.toolService.toolsSubject.subscribe(
      (tools: any[]) => {
        this.tools = tools;
      }
    );
    this.toolService.emitToolSubject();
  }

  ngOnDestroy() {
    this.toolSubscription.unsubscribe();
  }

  onFetch() {
    this.toolService.getToolFromServer();
  }

  onSave() {
    this.toolService.saveToolsToServer();
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
