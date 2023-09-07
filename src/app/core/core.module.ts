import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FooterContainer } from './containers/footer/footer.container';
import { SidebarContainer } from './containers/sidebar/sidebar.container';
import { HeaderContainer } from './containers/header/header.container';



@NgModule({
  declarations: [
    FooterContainer,
    SidebarContainer,
    HeaderContainer
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FooterContainer,
    SidebarContainer,
    HeaderContainer
  ]
})
export class CoreModule { }
