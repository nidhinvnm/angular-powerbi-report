import { Component } from '@angular/core';
import { ReportConfig } from 'powerbi-report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reportConfig: ReportConfig = {
    powerbiTokenUrl : '',
    workspaceId : '',
    reportId : ''
  }
  reportStyle = {
    width: "100%",
    height: "600px"
  }
}
