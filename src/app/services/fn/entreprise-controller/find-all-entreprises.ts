/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntrepriseDto } from '../../models/entreprise-dto';

export interface FindAllEntreprises$Params {
}

export function findAllEntreprises(http: HttpClient, rootUrl: string, params?: FindAllEntreprises$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllEntreprises.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EntrepriseDto>>;
    })
  );
}

findAllEntreprises.PATH = '/entreprises/allEntreprises';
