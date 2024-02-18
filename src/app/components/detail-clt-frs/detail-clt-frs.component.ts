import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent implements OnInit {
  @Input()
  clientFournisseur: any = {};
  @Input()
  origin: string = "";
  @Output()
  suppressionResult = new EventEmitter();
  constructor(
    private router: Router,
    private clientService: ClientService,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
  }

  navigateToEdit() {
    if (this.origin === "client") {
      this.router.navigate([`modifierClient/${this.clientFournisseur.id}`]);
    } else if (this.origin === "fournisseur") {
      this.router.navigate([`modifierFournisseur/${this.clientFournisseur.id}`]);
    }
  }

  confirmerEtSupprimer() {
    if (this.clientFournisseur.id) {
      if (this.origin === "client") {
        this.clientService.deleteClient(this.clientFournisseur.id).subscribe({
          next: (res) => {
            this.suppressionResult.emit("success");
          },
          error: (err) => {
            console.log(err);

            this.suppressionResult.emit("error");
          }
        });
      } else if (this.origin === "fournisseur") {
        this.fournisseurService.deleteFournisseur(this.clientFournisseur.id).subscribe({
          next: (res) => {
            this.suppressionResult.emit("success");
          },
          error: (err) => {
            console.log(err);

            this.suppressionResult.emit("error");
          }
        });
      }
    }
  }

}
