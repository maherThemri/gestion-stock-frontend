import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDto } from '../models';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = 'http://localhost:8089/categories';

  constructor(
    private http: HttpClient,
  ) { }

  saveCat(obj: CategoryDto): Observable<CategoryDto> {

    return this.http.post<CategoryDto>(`${this.apiUrl}/create`, obj);
  }

  findAllCategories(): Observable<Array<CategoryDto>> {
    return this.http.get<Array<CategoryDto>>(this.apiUrl + "/allCategories");
  }

  findCategoryById(id: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiUrl}/${id}`);
  }

  deleteCategorie(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
