import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AdresseDto, AuthenticationRequest, EntrepriseDto } from 'src/app/services/models';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {
  entrepriseDto: EntrepriseDto = {};
  adresseDto: AdresseDto = {};
  constructor(
    private entrepriseService: EntrepriseService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inscrire() {
    this.entrepriseDto.adresse = this.adresseDto;
    this.entrepriseService.inscrire(this.entrepriseDto).subscribe({
      next: (data) => {
        console.log("here data: ", data);
        const authenticationRequest: AuthenticationRequest = {
          email: this.entrepriseDto.email,
          password: "som3R@nd0mP@$$word"
        }
        this.authService.login(authenticationRequest).subscribe({
          next: (data) => {
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(data.token!);
            let fullName: string;
            let id: string;
            let email: string;
            fullName = decodedToken.fullname;
            id = decodedToken.UserId;
            email = decodedToken.sub;
            localStorage.setItem("FullName", fullName);
            localStorage.setItem("id", id);
            localStorage.setItem("email", email);
            localStorage.setItem("token", data.token!);
            localStorage.setItem("origin", "inscription");
            this.router.navigate(['changerMotDePasse']);
          }
        });

      },
      error: (err) => {
        console.log("here errors: ", err);
      }
    });
  }

}
