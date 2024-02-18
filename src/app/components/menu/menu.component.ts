import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
      id: "1",
      titre: "Tableau de bord",
      icon: "fas fa-chart-line",
      url: "",
      sousMenu: [
        {
          id: "11",
          titre: "Vue d'ensemble",
          icon: "fa-solid fa-chart-pie",
          url: ""
        },
        {
          id: "12",
          titre: "Statistiques",
          icon: "fa-solid fa-chart-column",
          url: "statistiques"
        }
      ]
    },
    {
      id: "2",
      titre: "Articles",
      icon: "fa-solid fa-dolly",
      url: "",
      sousMenu: [
        {
          id: "21",
          titre: "Articles",
          icon: "fa-solid fa-dolly",
          url: "articles"
        },
        {
          id: "22",
          titre: "Mouvement de stock",
          icon: "fa-brands fa-stack-overflow",
          url: "mvtstk"
        }
      ]
    },
    {
      id: "3",
      titre: "Clients",
      icon: "fa-solid fa-users",
      url: "",
      sousMenu: [
        {
          id: "31",
          titre: "Clients",
          icon: "fa-solid fa-users",
          url: "clients"
        },
        {
          id: "32",
          titre: "Commandes clients",
          icon: "fa-solid fa-bag-shopping",
          url: "commandesClient"
        }
      ]
    },
    {
      id: "4",
      titre: "Fournisseurs",
      icon: "fa-solid fa-users",
      url: "",
      sousMenu: [
        {
          id: "41",
          titre: "Fournisseurs",
          icon: "fa-solid fa-users",
          url: "fournisseurs"
        },
        {
          id: "42",
          titre: "Commandes fournisseurs",
          icon: "fa-solid fa-truck-fast",
          url: "commandesFournisseur"
        }
      ]
    },
    {
      id: "5",
      titre: "Parametrages",
      icon: "fa-solid fa-gears",
      url: "",
      sousMenu: [
        {
          id: "51",
          titre: "Categories",
          icon: "fa-solid fa-screwdriver-wrench",
          url: "categories"
        },
        {
          id: "32",
          titre: "Utilisateurs",
          icon: "fa-solid fa-users-gear",
          url: "utilisateurs"
        }
      ]
    },

  ];
  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  navigate(menu: Menu) {

    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}
