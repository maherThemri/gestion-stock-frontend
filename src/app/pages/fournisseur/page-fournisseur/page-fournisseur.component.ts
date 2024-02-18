import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';
import { FournisseurDto } from 'src/app/services/models';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {
  listFournisseurs: Array<FournisseurDto> = [];
  constructor(
    private router: Router,
    private fournisseurService: FournisseurService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs();
  }
  findAllFournisseurs(): void {
    this.fournisseurService.findAllFournisseurs().subscribe({
      next: (data) => {
        this.listFournisseurs = data;
      }
    });
  }

  nouveauFournisseur() {
    this.router.navigate(['nouveauFournisseur']);
  }

  handleSuppression(event: any) {
    if (event === 'success') {
      this.toastrService.success("Opération réussie.", "Good!");
      this.findAllFournisseurs();
    } else {
      this.toastrService.error("Opération échouée.", "Oops!");
    }
  }

}
