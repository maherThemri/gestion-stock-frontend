import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoaderService } from 'src/app/components/loader/service/loader.service';
import { error } from 'console';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    if (!(request.url.includes('/authenticate') || request.url.includes('/register') || request.url.includes('/createEntreprise'))) {
      const token = localStorage.getItem('token') as string;
      console.log("here token : ", token);

      if (token) {
        // assigner le token;
        const authReq = request.clone({
          headers: new HttpHeaders({
            Authorization: "Bearer " + token
          })
        });
        console.log("here authReq", authReq.headers);

        //return next.handle(authReq);
        return this.handleRequest(authReq, next);
      }
    }
    //return next.handle(request);
    return this.handleRequest(request, next);
  }

  handleRequest(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loaderService.hide();
      }
    },
      (error: any) => {
        this.loaderService.hide();
      }));
  }
}
