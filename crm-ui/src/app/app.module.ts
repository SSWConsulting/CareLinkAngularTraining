import { HttpBackend, HttpClientModule, HttpXhrBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { API_BASE_URL } from './api.generated.service';
import { AppComponent } from './app.component';
import { route } from './app.route';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { HttpInterceptorService } from './HttpInterceptor.service';
import { MockApiService } from './mock-api-service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(route), SharedModule, HttpClientModule],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiUrl
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HttpBackend,
      deps: [HttpXhrBackend, MockApiService],
      useFactory: DecideWhichBackendToUse
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function DecideWhichBackendToUse(realbackend: HttpBackend, mock: HttpBackend) {
  if (environment.use_mocked_api) {
    return mock;
  }
  return realbackend;
}
