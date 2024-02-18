import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  apiUrl: string = 'http://localhost:8089/fournisseurs';

  constructor(
    private http: HttpClient
  ) { }

  saveFournisseur(fournisseur: FournisseurDto): Observable<FournisseurDto> {
    return this.http.post<FournisseurDto>(`${this.apiUrl}/create`, fournisseur);
  }
  findAllFournisseurs(): Observable<Array<FournisseurDto>> {
    return this.http.get<Array<FournisseurDto>>(`${this.apiUrl}/allFournisseurs`);
  }
  findFournisseurById(id: number): Observable<FournisseurDto> {
    return this.http.get<FournisseurDto>(`${this.apiUrl}/find-fournisseur/${id}`);
  }
  deleteFournisseur(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  uploadFile(file: File, filename: string, id: number) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    return this.http.post(`${this.apiUrl}/uploadFile/${id}`, imageFormData);
  }
}
