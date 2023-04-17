import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Output() navigateTo = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navigateToPage(location: string) {
    this.navigateTo.emit(location);
  }
}
