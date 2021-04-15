import { NgModule } from '@angular/core';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  declarations: [CatsComponent],
  imports: [CatsRoutingModule],
  exports: [CatsRoutingModule]
})

export class CatsModule {}
