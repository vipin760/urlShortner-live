import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HandleErrorService } from "./HandleError.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor{
    constructor(
        private error:HandleErrorService,
        private toastrService:ToastrService
    ){}
    public intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return new Observable((observer)=>{
            next.handle(req).subscribe(
                (res: HttpEvent<any>)=>{
                    if(res instanceof HttpResponse){
                        observer.next(res)
                    }
                },
                (err:HttpErrorResponse) => {
                    this.error.handleError(err)   
                }
            )
        })
    }
}