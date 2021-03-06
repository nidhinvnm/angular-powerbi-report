# Angular PowerBI Report

This Library helps to integrate Power BI reports to Angular application. Library provide component to automatically fetch token and display report.

## Installation

Run `npm i angular-powerbi-report` to install the package from NPM registry.

## Usage

Import report module in the application module (eg: `app.module.ts`) as below
```
import { PowerBiReportModule } from 'powerbi-report';

@NgModule({
    declarations: [
  ],
  imports: [
    PowerBiReportModule
  ],
  providers: [],
  bootstrap: []
})
```
Call the Report component from the application component .html file (eg: app.component.html) as below.
```
<power-bi-report
    [reportConfig]="reportConfig"
    [reportStyle]="reportStyle">
</power-bi-report>
```
Also initialize the parameters in the .ts file (eg:app.component.ts) as below
```
import { ReportConfig } from 'power-bi-report-lib/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adient-library';
  reportConfig: ReportConfig = {
    powerbiTokenUrl : 'your token url',
    workspaceId : 'workspace id of the report',
    reportId : 'report id that need to display'
  }
  reportStyle = {
    width: "100%",
    height: "600px"
  }
}
```
`reportConfig` is mandatory for displaying the report. `reportStyle` is to configure the appearance of report(support all the general css styling attributes).