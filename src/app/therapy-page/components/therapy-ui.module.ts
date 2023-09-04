import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistsListItemComponent } from './therapists-list-item/therapists-list-item.component';




@NgModule({
  declarations: [
    TherapistsListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TherapistsListItemComponent
  ]
})
export class TherapyUiModule { }
