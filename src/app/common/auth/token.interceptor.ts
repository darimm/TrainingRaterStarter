import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private authService: AuthService;

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.authService) {
        this.authService = this.injector.get(AuthService);
        }

        const token = this.authService.token;
        let dupRequest: HttpRequest<any>;

        if (token) {
            const headers = {
                'Authorization': token,
            };
            dupRequest = request.clone({
                setHeaders: headers,
            });

            return next.handle(dupRequest);
        } else {
            return next.handle(request);
        }
    }

}
