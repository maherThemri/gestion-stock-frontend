/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';

export interface FindById3$Params {
  idCategory: number;
}

export function findById3(http: HttpClient, rootUrl: string, params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
  const rb = new RequestBuilder(rootUrl, findById3.PATH, 'get');
  if (params) {
    rb.path('idCategory', params.idCategory, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryDto>;
    })
  );
}

findById3.PATH = '/categories/{idCategory}';
