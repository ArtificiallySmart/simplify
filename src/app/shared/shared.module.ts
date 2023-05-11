import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MenuListComponent],
  imports: [CommonModule, IonicModule.forRoot(), HttpClientModule],
  exports: [
    MenuListComponent,
    IonicModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
