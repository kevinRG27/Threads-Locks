import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {APP_ROUTING} from './app.routes';
import { TicketComponent } from './components/ticket/ticket.component';
import { ColaComponent } from './components/cola/cola.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TicketComponent,
    ColaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
