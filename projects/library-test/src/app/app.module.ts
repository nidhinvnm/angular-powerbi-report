import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PowerBiReportModule } from 'powerbi-report';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PowerBiReportModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
