import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl: string = 'http://localhost:8089/clients';

  constructor(
    private http: HttpClient
  ) { }

  saveClient(client: ClientDto): Observable<ClientDto> {
    console.log("here service ", client);

    return this.http.post<ClientDto>(`${this.apiUrl}/create`, client);
  }
  findAllClients(): Observable<Array<ClientDto>> {
    return this.http.get<Array<ClientDto>>(`${this.apiUrl}/allClients`);
  }
  findClientById(id: number): Observable<ClientDto> {
    return this.http.get<ClientDto>(`${this.apiUrl}/find-client/${id}`);
  }
  deleteClient(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  uploadFile(file: File, filename: string, id: number) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    return this.http.post(`${this.apiUrl}/uploadFile/${id}`, imageFormData);
  }
}
