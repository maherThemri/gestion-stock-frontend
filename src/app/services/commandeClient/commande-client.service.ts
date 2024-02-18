import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeClientDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {
  apiUrl: string = 'http://localhost:8089/commandesClients';
  constructor(
    private http: HttpClient
  ) { }
  saveCommande(commande: CommandeClientDto): Observable<CommandeClientDto> {
    console.log(commande);

    return this.http.post<CommandeClientDto>(`${this.apiUrl}/create`, commande);
  }
}
