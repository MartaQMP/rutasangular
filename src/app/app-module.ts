import { routing, appRoutingProvider } from './app.routing';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Cine } from './components/cine/cine';
import { Musica } from './components/musica/musica';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Notfound } from './components/notfound/notfound';
import { Numerodoble } from './components/numerodoble/numerodoble';

@NgModule({
  declarations: [
    App,
    Cine,
    Musica,
    Home,
    Menu,
    Notfound,
    Numerodoble
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
