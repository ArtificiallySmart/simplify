import { Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu!: IonMenu;

  constructor(private router: Router) {}

  navigateTo(location: string) {
    this.router.navigate([location]);
    this.menu.close();
  }
}
