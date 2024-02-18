import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client/client.service';
import { ClientDto } from 'src/app/services/models';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {
  listClients: Array<ClientDto> = [];
  constructor(
    private router: Router,
    private clientService: ClientService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.findAllClients();
  }
  findAllClients(): void {
    this.clientService.findAllClients().subscribe({
      next: (data) => {
        this.listClients = data;
      }
    });
  }
  nouveauClient() {
    this.router.navigate(['nouveauClient']);
  }
  handleSuppression(event: any) {
    if (event === 'success') {
      this.toastrService.success("Opération réussie.", "Good!");
      this.findAllClients();
    } else {
      this.toastrService.error("Opération échouée.", "Oops!");
    }
  }

}
