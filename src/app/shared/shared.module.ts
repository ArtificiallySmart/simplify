import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { B64imgPipe } from './pipes/b64img.pipe';

@NgModule({
  declarations: [MenuListComponent, B64imgPipe],
  imports: [CommonModule, IonicModule.forRoot(), HttpClientModule],
  exports: [
    MenuListComponent,
    IonicModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ImageCropperModule,
    B64imgPipe,
  ],
})
export class SharedModule {}
