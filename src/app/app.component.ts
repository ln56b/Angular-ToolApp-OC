import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onSwitchOn() {
    console.log("Let's switch on all tools!")
  }
}
