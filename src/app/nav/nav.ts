import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class NavItem {
  constructor(
    public href: string,
    public enabled: boolean,
    public text: string
  ) {}
}

@Component({
  selector: 'jazzpianotv-nav',
  template: require('./nav.html')
})
export class NavComponent {
  public navItems: NavItem[];
  public navItem: NavItem;

  constructor(public http: Http) {
    this.getNavItems().subscribe(result => this.navItems = result);
  }

  getNavItems(): Observable<NavItem[]> {
    return this.http
      .get('app/nav/nav.json')
      .map(response => response.json());
  }
}
