import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToolService } from "../services/tool.service";

@Component({
  selector: "app-single-tool",
  templateUrl: "./single-tool.component.html",
  styleUrls: ["./single-tool.component.scss"],
})
export class SingleToolComponent implements OnInit {
  name: string = "Tool";
  status: string = "Status";

  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.name = this.toolService.getToolById(+id).name;
    this.status = this.toolService.getToolById(+id).status;
  }
}
