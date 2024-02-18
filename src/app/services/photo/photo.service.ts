import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  apiUrl: string = 'http://localhost:8089/photos';
  constructor(
    private http: HttpClient
  ) { }
  savePhoto(id: number, title: string, context: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(
      `${this.apiUrl}/save/${id}/${title}/${context}`,
      formData,
      { headers: headers }
    );
  }
}
