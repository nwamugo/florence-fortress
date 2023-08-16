import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './containers/sidebar/sidebar.component';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent]
})
export class SharedModule { }
