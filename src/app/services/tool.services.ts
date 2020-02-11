export class ToolService {

  tools = [
    {
    name: 'Washing machine',
    status: 'Off'
    },
    {
      name: 'TV',
      status: 'Off'
      },
      {
        name: 'Computer',
        status: 'On'
        },
  ];

  switchOnAll() {
    for (let tool of this.tools) {
      tool.status = "On"
    }
  };
  
  switchOffAll() {
    for (let tool of this.tools) {
      tool.status = "Off"
    }
  };

  switchOnOne(index: number) {
    this.tools[index].status = 'On';
  }

  switchOffOne(index: number) {
    this.tools[index].status = 'Off';
  }
}