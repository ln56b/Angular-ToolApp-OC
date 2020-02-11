import { Component, OnInit } from '@angular/core';
import { toolService } from './services/tool.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  tools: any[];
  
  constructor(private toolService: toolService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.tools = this.toolService.tools;
  }

  onSwitchOn() {
    this.toolService.switchOnAll()
  }

  onSwitchOff() {
    this.toolService.switchOffAll()
  }
}
