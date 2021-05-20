import { NgModule } from '@angular/core';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnlyNumber } from '../../../shared/custom.directive';

@NgModule({
  declarations: [CatsComponent, OnlyNumber],
  imports: [CatsRoutingModule, ReactiveFormsModule, CommonModule],
  exports: [CatsRoutingModule]
})

export class CatsModule {}
