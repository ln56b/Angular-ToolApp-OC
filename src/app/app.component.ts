// 5. Add variables to be used in html
// 7. Create setTimeOut to modify auth status
// 9. Create switchOn method to be used on click in html

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isAuth = false;

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
}
