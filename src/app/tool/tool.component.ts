//4. Add methods to be used on html

import { Component, Input, OnInit } from '@angular/core';
import { ToolService } from '../services/tool.services'

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  // 3. Create variables and affect them a type.
  @Input() toolName : string;
  @Input() toolStatus : string;
  @Input() indexOfTool : number;
  
  constructor(private toolService: ToolService) { }

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

  onSwitchOn() {
    this.toolService.switchOnOne(this.indexOfTool);
  }

  onSwitchOff() {
    this.toolService.switchOffOne(this.indexOfTool);
  }
}
