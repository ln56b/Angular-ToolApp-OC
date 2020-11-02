// 5. Add variables to be used in html
// 7. Create setTimeOut to modify auth status
// 9. Create switchOn method to be used on click in html

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs/";
import { interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  seconds: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log("Oups" + error);
      },
      () => {
        console.log("Observable completed");
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
