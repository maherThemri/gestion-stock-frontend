import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl: string = 'http://localhost:8089/articles';

  constructor(
    private http: HttpClient
  ) { }

  saveArticle(obj: ArticleDto): Observable<ArticleDto> {
    return this.http.post<ArticleDto>(`${this.apiUrl}/create`, obj);
  }

  findAllArticles(): Observable<Array<ArticleDto>> {
    return this.http.get<Array<ArticleDto>>(`${this.apiUrl}/allArticle`);
  }

  findArticleById(id: number): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.apiUrl}/get-article/${id}`)
  }

  deleteArticleById(id: number) {
    console.log("here id in service :", id);

    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  findArticleByCodeArticle(codeArticle: string): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.apiUrl}/${codeArticle}`)
  }
  uploadFile(file: File, filename: string, id: number) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    return this.http.post(`${this.apiUrl}/uploadFile/${id}`, imageFormData);
  }

}
