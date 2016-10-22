import {Component, Input} from '@angular/core';
import {NavItem} from './nav';

@Component({
  selector: 'jazzpianotv-nav-item',
  template: require('./navItem.html')
})
export class NavItemComponent {
  @Input() public navItem: NavItem;
}
