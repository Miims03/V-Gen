import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Enregistre la locale française
registerLocaleData(localeFr);

bootstrapApplication(AppComponent, {
  ...appConfig, // Utilisation de la config existante
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' } // Utiliser la locale française
  ]
})
.catch((err) => console.error(err));
