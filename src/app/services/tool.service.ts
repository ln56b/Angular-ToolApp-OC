import { Subject } from "rxjs";

export class ToolService {
  toolsSubject = new Subject<any[]>();

  private tools = [
    {
      id: 1,
      name: "Washing machine",
      status: "Off",
    },
    {
      id: 2,
      name: "TV",
      status: "Off",
    },
    {
      id: 3,
      name: "Computer",
      status: "On",
    },
  ];

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
