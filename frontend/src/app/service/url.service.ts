import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnalyticsData, IUrlData, IUrlData_getUrl } from '../store/interface/IUrl.model';
import { BASE_URI } from '../store/links/constants';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private http:HttpClient
  ) { }

  AddUrl(url:string){
   return this.http.post<IUrlData>(`${BASE_URI}`,url);
  }

  GetUrl(url:string){
    return this.http.get<IUrlData_getUrl>(`${BASE_URI}/${url}`)
  }
  GetUnshortenUrl(url:string){
    return this.http.get<IUrlData_getUrl>(`${BASE_URI}/un-short?id=${encodeURIComponent(url)}`)
  }
  
  GetAnalytics(url:string){
    return this.http.get<IAnalyticsData>(`${BASE_URI}/analytics?id=${encodeURIComponent(url)}`);
  }
}
