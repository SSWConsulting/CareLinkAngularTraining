import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { route } from './app.route';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { API_BASE_URL } from './api.generated.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(route), SharedModule, HttpClientModule],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
