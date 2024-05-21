import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlService } from 'src/app/service/url.service';
import { IAnalytics, IAnalyticsData, IUrlData_getUrl } from 'src/app/store/interface/IUrl.model';

@Component({
  selector: 'app-url-analalytics',
  templateUrl: './url-analalytics.component.html',
  styleUrls: ['./url-analalytics.component.css']
})
export class UrlAnalalyticsComponent implements OnInit{

  urlForm!:FormGroup;
  analyticsData!:IAnalytics;
  isSubmitted:boolean=false;

  constructor(
    private fb:FormBuilder,
    private urlService:UrlService
  ){}
 ngOnInit(): void {
   this.urlForm = this.fb.group({
    url:['',Validators.compose([Validators.required,Validators.pattern(/^https?:\/\/\S+$/)])]
   })
 }

 get urlFormControl(){
  return this.urlForm.controls
 }
  submit(){
    this.isSubmitted=true
    if(this.urlForm.invalid) return;
    this.urlService.GetAnalytics(this.urlForm.value.url).subscribe((data)=>{
      this.analyticsData = data.data
    })

  }
}
