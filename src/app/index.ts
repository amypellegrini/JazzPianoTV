import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';
import {NavModule} from './nav';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule,
    NavModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
