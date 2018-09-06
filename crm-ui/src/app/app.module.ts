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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as appInitialState, appReducer } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(route), SharedModule, HttpClientModule, NxModule.forRoot(), StoreModule.forRoot(
  { app: appReducer },
  {
    initialState : { app : appInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
), EffectsModule.forRoot([AppEffects]), !environment.production ? StoreDevtoolsModule.instrument() : [], StoreRouterConnectingModule],
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
