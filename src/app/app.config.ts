
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import {  MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()),{provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue:{subscriptSizing: 'dynamic'}},
    provideHttpClient(withFetch()),
    importProvidersFrom([SweetAlert2Module.forRoot()]),
    
  ]
};


