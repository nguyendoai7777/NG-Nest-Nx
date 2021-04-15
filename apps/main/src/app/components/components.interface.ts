export interface NavItem {
  content: string;
  href: string;
}

export interface SideItem extends NavItem{
  targetBlank: boolean;
}
