import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangerMotDePasseUtilisateurDto, UtilisateurDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:8089/utilisateurs';
  constructor(
    private http: HttpClient
  ) { }

  changerMotDePasse(obj: ChangerMotDePasseUtilisateurDto): Observable<UtilisateurDto> {
    return this.http.post(`${this.apiUrl}/update/password`, obj);
  }

  findUserByEmail(email: string): Observable<UtilisateurDto> {
    return this.http.get<UtilisateurDto>(`${this.apiUrl}/find/${email}`);
  }
}
