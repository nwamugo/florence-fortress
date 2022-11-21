import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainer } from './containers/footer/footer.container';



@NgModule({
  declarations: [
    FooterContainer,
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterContainer]
})
export class CoreModule { }
