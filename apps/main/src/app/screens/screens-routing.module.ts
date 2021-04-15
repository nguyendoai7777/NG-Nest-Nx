import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { ItemsComponent } from './items/items.component';

const childRoute: Routes = [
  {
    path: 'cats',
    component: CatsComponent,
    loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'items',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoute)],
  exports: [RouterModule]
})

export class ScreensRoutingModule {
}
