import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from 'src/app/_services/environment/environment.service';



@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(private env: EnvironmentService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = this.env.baseUrl();
    const apiReq = req.clone({ url: baseUrl + req.url});
    return next.handle(apiReq);
  }
}
//
// Ésta clase se inyecta en el app.module.ts module
export const UrlInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UrlInterceptor,
  multi: true
};
