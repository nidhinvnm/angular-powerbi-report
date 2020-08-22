import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PowerBiReportService {

  constructor(private http: HttpClient) { }

  getPowerBiReportToken(url) {
    return this.http.get(url);
  }
}
