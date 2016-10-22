import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {NavComponent} from './nav';
import {NavItemComponent} from './navItem';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    NavComponent,
    NavItemComponent
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {}
