import { Component, Input, OnInit } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  
  @Input() toolName : string;
  @Input() toolStatus : string;
  
  constructor() { }

  ngOnInit(): void {
  }

  getStatus()  {
    return this.toolStatus;
  }

  getColor() {
    if (this.toolStatus === 'On') {
      return 'green';
    } else if (this.toolStatus === 'Off')  {
      return 'red';
    }
  }
}
