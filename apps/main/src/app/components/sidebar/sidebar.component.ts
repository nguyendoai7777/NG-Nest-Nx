import { Component, OnInit } from '@angular/core';
import { SideItem } from '../components.interface';

@Component({
  selector: 'ns-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: SideItem[] = [
    {
      content: 'Đăng nhập',
      href: 'login',
      targetBlank: false
    },
    {
      content: 'Đăng ký',
      href: 'signup',
      targetBlank: false
    },
    {
      content: 'Quên mật khẩu',
      href: 'forgot_password',
      targetBlank: false
    },
    {
      content: 'Xếp hạng',
      href: '',
      targetBlank: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
