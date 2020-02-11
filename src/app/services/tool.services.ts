export class toolService {

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
}