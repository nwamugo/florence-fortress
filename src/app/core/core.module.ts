import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FooterContainer } from './containers/footer/footer.container';
import { SidebarContainer } from './containers/sidebar/sidebar.container';



@NgModule({
  declarations: [
    FooterContainer,
    SidebarContainer
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FooterContainer, SidebarContainer]
})
export class CoreModule { }
