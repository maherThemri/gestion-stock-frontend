import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntrepriseDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  apiUrl: string = 'http://localhost:8089/entreprises';
  constructor(
    private http: HttpClient
  ) { }
  inscrire(entrepriseDto: EntrepriseDto): Observable<EntrepriseDto> {
    return this.http.post<EntrepriseDto>(`${this.apiUrl}/createEntreprise`, entrepriseDto);
  }

  getAllEntrprise(): Observable<Array<EntrepriseDto>> {
    return this.http.get<Array<EntrepriseDto>>(`${this.apiUrl}/allEntreprises`);
  }
}
