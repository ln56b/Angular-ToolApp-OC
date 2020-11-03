import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ToolService {
  toolsSubject = new Subject<any[]>();

  private tools = [];

  constructor(private httpClient: HttpClient) {}

  addTool(name: string, status: string) {
    const toolObject = {
      id: 0,
      name: "",
      status: "",
    };

    toolObject.name = name;
    toolObject.status = status;
    toolObject.id = this.tools[this.tools.length - 1].id + 1;
    this.tools.push(toolObject);
    this.emitToolSubject();
  }

  emitToolSubject() {
    this.toolsSubject.next(this.tools.slice());
  }

  getToolById(id: number) {
    const tool = this.tools.find((tool) => tool.id === id);
    return tool;
  }

  getToolFromServer() {
    this.httpClient
      .get<any[]>("https://angular-tool-app.firebaseio.com/tools.json")
      .subscribe(
        (res) => {
          this.tools = res;
          this.emitToolSubject();
        },
        (err) => {
          console.log("Loading error" + err);
        }
      );
  }

  saveToolsToServer() {
    this.httpClient
      .put("https://angular-tool-app.firebaseio.com/tools.json", this.tools)
      .subscribe(
        () => {
          console.log("data saved");
        },
        (error) => console.log("This error occurred" + error)
      );
  }

  switchOnAll() {
    for (let tool of this.tools) {
      tool.status = "On";
    }
    this.emitToolSubject();
  }

  switchOffAll() {
    for (let tool of this.tools) {
      tool.status = "Off";
    }
    this.emitToolSubject();
  }

  switchOnOne(index: number) {
    this.tools[index].status = "On";
    this.emitToolSubject();
  }

  switchOffOne(index: number) {
    this.tools[index].status = "Off";
    this.emitToolSubject();
  }
}
