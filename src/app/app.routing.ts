import { Home } from './components/home/home';
import { Cine } from './components/cine/cine';
import { Musica } from './components/musica/musica';
//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR/ROUTER
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Notfound } from './components/notfound/notfound';
import { Numerodoble } from './components/numerodoble/numerodoble';
import { Tablamultiplicar } from './components/tablamultiplicarrouting/tablamultiplicar';

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERA DE TIPO Routes
const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'cine', component: Cine },
  { path: 'musica', component: Musica },
  { path: 'numerodoble', component: Numerodoble },
  { path: 'numerodoble/:numero', component: Numerodoble },
  { path: 'tablamultiplicar/:numero', component: Tablamultiplicar },
  { path: '**', component: Notfound },
];

//DESDE ESTA CLASE DEBEMOS EXPORTAR EL ARRAY DE ROUTES COMO PROVIDER
export const appRoutingProvider: any[] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
