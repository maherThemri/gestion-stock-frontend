/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';

export interface FindAllArticleByIdCategory$Params {
  idCategory: number;
}

export function findAllArticleByIdCategory(http: HttpClient, rootUrl: string, params: FindAllArticleByIdCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllArticleByIdCategory.PATH, 'get');
  if (params) {
    rb.path('idCategory', params.idCategory, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ArticleDto>>;
    })
  );
}

findAllArticleByIdCategory.PATH = '/articles/filter/category/{idCategory}';