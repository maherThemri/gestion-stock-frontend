import { Injectable } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:8089/auth';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post(`${this.apiUrl}/authenticate`, authenticationRequest);
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
