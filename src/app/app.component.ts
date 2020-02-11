import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )

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
