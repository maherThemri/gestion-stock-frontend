import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client/client.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';
import { AdresseDto, ClientDto } from 'src/app/services/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {
  origin: string = "";
  clientFournisseur: any = {};
  adresseDto: AdresseDto = {};
  idEntrprise?: number;
  file: File | null = null;
  imgUrl: string | ArrayBuffer = "assets/product.jpg";
  imageCltFrs: string | ArrayBuffer = "assets/uploads/";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private fournisseurService: FournisseurService,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.origin = data['origin'];
    });
    this.userService.findUserByEmail(localStorage.getItem("email")!).subscribe({
      next: (res) => {
        this.idEntrprise = res.entreprise?.id;
      }
    });
    this.findObject();
  }
  findObject() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      if (this.origin === "client") {
        this.clientService.findClientById(id).subscribe({
          next: (data) => {
            this.clientFournisseur = data;
            this.adresseDto = data.adresse!;
            this.imageCltFrs += data.photo!;
          }
        });
      } else if (this.origin === "fournisseur") {
        this.fournisseurService.findFournisseurById(id).subscribe({
          next: (data) => {
            this.clientFournisseur = data;
            this.adresseDto = data.adresse!;
          }
        });
      }
    }
  }

  save() {
    this.clientFournisseur.idEntreprise = this.idEntrprise;
    this.clientFournisseur.adresse = this.adresseDto;
    if (this.origin === "client") {
      this.clientService.saveClient(this.clientFournisseur).subscribe({
        next: (res) => {
          this.savePhoto(res.id);
          this.toastrService.success("Opération réussie.", "Good!");
        },
        error: (err) => {
          this.toastrService.error("Opération échouée.", "Oops!");
        }
      });
    } else if (this.origin === "fournisseur") {
      this.fournisseurService.saveFournisseur(this.clientFournisseur).subscribe({
        next: (res) => {
          this.savePhoto(res.id);
          this.toastrService.success("Opération réussie.", "Good!");
        },
        error: (err) => {
          this.toastrService.error("Opération échouée.", "Oops!");
        }
      });
    }
  }

  cancelClick() {
    if (this.origin === "client") {
      this.router.navigate(["clients"]);
    } else if (this.origin === "fournisseur") {
      this.router.navigate(["fournisseurs"]);
    }
  }

  onFileInput(files: FileList | null) {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = () => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
            this.imageCltFrs = fileReader.result;
          }
        };
      }
    }
  }
  savePhoto(id?: number) {
    if (id && this.file) {
      if (this.origin === "client") {
        this.clientService.uploadFile(this.file, this.file?.name, id).subscribe({
          next: (data) => {
            this.router.navigate(["clients"]);
          }
        });
      } else if (this.origin === "fournisseur") {
        this.fournisseurService.uploadFile(this.file, this.file?.name, id).subscribe({
          next: (data) => {
            this.router.navigate(["fournisseurs"]);
          }
        });
      }
    } else if (this.origin === "client") {
      this.router.navigate(["clients"]);
    } else {
      this.router.navigate(["fournisseurs"]);
    }
  }

}
