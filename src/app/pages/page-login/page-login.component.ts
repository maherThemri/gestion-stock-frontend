import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationRequest } from 'src/app/services/models';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  authenticationRequest!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.authenticationRequest = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }
  login() {
    if (this.authenticationRequest.valid) {
      this.authService.login(this.authenticationRequest.value).subscribe({
        next: (data) => {
          console.log(data);

          localStorage.setItem("token", data.token!);
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
          this.router.navigate(['']);
        },
        error: (err) => {
          this.toastr.error("Login et/ou mot de passe incorrecte", "Oops!");
          console.log("here errors", err);

        }
      });
    } else {
      this.toastr.error("Invalid paramètres", "Oops!");
    }

  }

}
