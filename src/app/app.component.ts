import { Component } from '@angular/core';
import { CommonService } from '../app/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TollGateInformation';
  constructor (private com:CommonService){

  }
}
