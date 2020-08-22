# Angular PowerBI Report

This Library helps to integrate Power BI reports to Angular application.

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

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
