import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MenuListComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [
    MenuListComponent,
    IonicModule,
    RouterModule,
    CommonModule,
    BrowserModule,
  ],
})
export class SharedModule {}
