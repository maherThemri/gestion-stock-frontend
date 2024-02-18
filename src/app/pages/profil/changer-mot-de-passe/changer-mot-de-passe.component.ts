import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { ChangerMotDePasseUtilisateurDto } from 'src/app/services/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMotDePasse: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = "";

  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = "som3R@nd0mP@$$word";
    }
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  saveMotDePasse(): void {
    this.changerMotDePasse.id = parseInt(localStorage.getItem('id')!, 10)
    this.userService.changerMotDePasse(this.changerMotDePasse).subscribe({
      next: (data) => {
        this.toastrService.success("Opération ressuite", "GOOD!");
        console.log("here response data: ", data);
        this.router.navigate(['profil']);
      }
    });
  }

}
