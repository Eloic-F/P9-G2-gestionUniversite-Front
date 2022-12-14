import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/authentification', title: 'Authentification',  icon:'ni-circle-08 text-pink', class: '' },
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/mon-profil', title: 'Mon profil',  icon:'ni-single-02', class: '' },
    { path: '/espace-enseignant', title: 'Espace enseignant',  icon:'ni-planet text-blue', class: '' },
    { path: '/espace-compte', title: 'Espace Compte',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/espace-cours', title: 'Espace Cours',  icon:'ni-books text-red', class: '' },
    { path: '/contacts', title: 'Contacts',  icon:'ni-book-bookmark text-info', class: '' },
    { path: '/evaluation-question', title: 'Evaluation & Question',  icon:'ni-chat-round text-orange', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
