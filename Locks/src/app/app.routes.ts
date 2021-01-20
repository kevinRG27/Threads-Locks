import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ColaComponent } from './components/cola/cola.component';

const routes: Routes = [{
    path: "inicio",
    component: InicioComponent
},
{
    path: "ticket",
    component: TicketComponent
},
{
    path: "cola",
    component: ColaComponent
},
{
    path: "**",
    pathMatch: "full", redirectTo: "inicio"
}]

export const APP_ROUTING = RouterModule.forRoot(routes); 