import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public sidebarItems = [
    // { label: 'Search Employee', url: './employees', icon: 'fa-magnifying-glass' },
    { label: 'Check All Employees', url: './employees', icon: 'fa-table' },
  ];
}
