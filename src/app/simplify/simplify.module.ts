import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplifyComponent } from './screens/simplify/simplify.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SimplifyComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SimplifyModule {}
