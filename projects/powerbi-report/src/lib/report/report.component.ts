import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as pbi from 'powerbi-client';
import { ReportConfig } from '../config.model';
import { PowerBiReportService } from '../powerbi-report.service';

@Component({
  selector: 'pbi-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() reportConfig: ReportConfig;
  @Input() reportStyle: {};

  powerbihtml: any;
  public screenHeight: number;
  @ViewChild('reportContainer', { static: false }) reportContainer: ElementRef<any>;
  reportType: string;
  constructor(private dataService: PowerBiReportService) { }

  ngOnInit() {
    this.screenHeight = (window.screen.height);
    this.getToken();
  }

  getToken() {
    const url = this.getURL();
    this.dataService.getPowerBiReportToken(url).subscribe((data: any) => {
      const reportid = data.Id;
      const embedurl = data.EmbedUrl;
      const accessToken = data.EmbedToken.token;
      this.showReport(reportid, embedurl, accessToken);
    });
  }
  getURL() {
    return this.reportConfig.powerbiTokenUrl
      + '&workspaceid='
      + this.reportConfig.workspaceId
      + '&reportid='
      + this.reportConfig.reportId;
  }


  showReport(reportid, reporturl, accessToken) {
    const models = pbi.models;
    const config = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken,
      embedUrl: reporturl,
      id: reportid,
      permissions: models.Permissions.All,
      settings: {
      }
    };

    const reportContainer = this.reportContainer.nativeElement;
    const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    const report = powerbi.embed(reportContainer, config);
    report.off('loaded');
    report.on('loaded', () => {
      console.log('Loaded');
    });
    report.on('error', () => {
      this.getToken();
    });
  }

}



