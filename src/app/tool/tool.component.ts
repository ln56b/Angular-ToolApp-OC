// 3. Create @Input variables and affect them a type.
// 4. Add methods to be used on html

import { Component, Input, OnInit } from "@angular/core";
import { ToolService } from "../services/tool.service";

@Component({
  selector: "app-tool",
  templateUrl: "./tool.component.html",
  styleUrls: ["./tool.component.scss"],
})
export class ToolComponent implements OnInit {
  @Input() toolName: string;
  @Input() toolStatus: string;
  @Input() indexOfTool: number;
  @Input() toolId: number;

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.toolStatus;
  }

  getColor() {
    if (this.toolStatus === "On") {
      return "green";
    } else if (this.toolStatus === "Off") {
      return "red";
    }
  }

  onSwitchOn() {
    this.toolService.switchOnOne(this.indexOfTool);
  }

  onSwitchOff() {
    this.toolService.switchOffOne(this.indexOfTool);
  }
}
