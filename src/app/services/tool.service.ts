export class ToolService {
  tools = [
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

  getToolById(id: number) {
    const tool = this.tools.find((tool) => tool.id === id);
    return tool;
  }

  switchOnAll() {
    for (let tool of this.tools) {
      tool.status = "On";
    }
  }

  switchOffAll() {
    for (let tool of this.tools) {
      tool.status = "Off";
    }
  }

  switchOnOne(index: number) {
    this.tools[index].status = "On";
  }

  switchOffOne(index: number) {
    this.tools[index].status = "Off";
  }
}
