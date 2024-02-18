/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntrepriseDto } from '../../models/entreprise-dto';

export interface SaveEntreprise$Params {
      body: EntrepriseDto
}

export function saveEntreprise(http: HttpClient, rootUrl: string, params: SaveEntreprise$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
  const rb = new RequestBuilder(rootUrl, saveEntreprise.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntrepriseDto>;
    })
  );
}

saveEntreprise.PATH = '/entreprises/create';
