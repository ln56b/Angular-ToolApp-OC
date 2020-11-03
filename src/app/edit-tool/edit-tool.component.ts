import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToolService } from "../services/tool.service";

@Component({
  selector: "app-edit-tool",
  templateUrl: "./edit-tool.component.html",
  styleUrls: ["./edit-tool.component.scss"],
})
export class EditToolComponent implements OnInit {
  defaultStatus = "off";

  constructor(private toolService: ToolService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const status = form.value.status;
    this.toolService.addTool(name, status);
    this.router.navigate(["/tools"]);
  }
}
