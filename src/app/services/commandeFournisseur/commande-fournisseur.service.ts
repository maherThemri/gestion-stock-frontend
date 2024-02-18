import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeFournisseurDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {
  apiUrl: string = 'http://localhost:8089/commandesFournisseurs';

  constructor(
    private http: HttpClient
  ) { }
  saveCommande(commande: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    console.log(commande);

    return this.http.post<CommandeFournisseurDto>(`${this.apiUrl}/create`, commande);
  }
}
