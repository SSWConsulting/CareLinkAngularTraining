import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { API_BASE_URL } from './api.generated.service';
import { AppComponent } from './app.component';
import { route } from './app.route';
import { GlobalErrorHandler } from './GlobalErrorHandler';
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
