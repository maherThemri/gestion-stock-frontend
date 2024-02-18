import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouveauUtilisateur(): void {
    this.router.navigate(['nouveauUtilisateur']);
  }
  exporterUtilisateur(): void {
    alert("button exporter clicked");
  }

}
