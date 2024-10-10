import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import du RouterModule

import { AppComponent } from './app.component'; // Assure-toi que le chemin est correct
import { AccueilComponent } from './accueil/accueil.component';

// Importation des routes
import { routes } from './app.routes'; // Assure-toi que le chemin est correct

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
