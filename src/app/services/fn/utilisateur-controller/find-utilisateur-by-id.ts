/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UtilisateurDto } from '../../models/utilisateur-dto';

export interface FindUtilisateurById$Params {
  idUtilisateur: number;
}

export function findUtilisateurById(http: HttpClient, rootUrl: string, params: FindUtilisateurById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
  const rb = new RequestBuilder(rootUrl, findUtilisateurById.PATH, 'get');
  if (params) {
    rb.path('idUtilisateur', params.idUtilisateur, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UtilisateurDto>;
    })
  );
}

findUtilisateurById.PATH = '/utilisateurs/{idUtilisateur}';
