import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'simplify',
    loadChildren: () =>
      import('./simplify/simplify.module').then((m) => m.SimplifyModule),
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, SharedModule],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
