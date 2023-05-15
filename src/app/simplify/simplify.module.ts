import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplifyComponent } from './screens/simplify/simplify.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CaptureComponent } from './components/capture/capture.component';
import { CropComponent } from './components/crop/crop.component';

const routes: Routes = [
  {
    path: '',
    component: SimplifyComponent,
  },
];

@NgModule({
  declarations: [SimplifyComponent, CaptureComponent, CropComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SimplifyModule {}
