import { Component, OnInit } from '@angular/core';
import { NavItem } from '../components.interface';

@Component({
  selector: 'ns-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navs: NavItem[] = [
    {
      content: 'products',
      href: 'products'
    },
    {
      content: 'items',
      href: 'items'
    },
    {
      content: 'cats',
      href: 'cats'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
