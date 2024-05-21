import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-unshort-url',
  templateUrl: './unshort-url.component.html',
  styleUrls: ['./unshort-url.component.css']
})
export class UnshortUrlComponent  implements OnInit{
urlForm!:FormGroup;
oldUrl!:string;
isSubmitted:boolean=false;
errormessage!:string;
  constructor(
    private urlService:UrlService,
    private fb:FormBuilder
  ){}
    ngOnInit(): void {
      this.urlForm = this.fb.group({
        url:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern(/^https?:\/\/\S+$/)])]
      })
    }


    get urlFormControl(){
      return this.urlForm.controls
    }
  submit(){
    this.isSubmitted=true;
    if(this.urlForm.invalid) return
    this.urlService.GetUnshortenUrl(this.urlForm.value.url).subscribe((data)=>{
      this.oldUrl = data.data
    })
  }
}
