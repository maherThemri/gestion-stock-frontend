/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FournisseurDto } from '../../models/fournisseur-dto';

export interface FindFournisseurById$Params {
  idFournisseur: number;
}

export function findFournisseurById(http: HttpClient, rootUrl: string, params: FindFournisseurById$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, findFournisseurById.PATH, 'get');
  if (params) {
    rb.path('idFournisseur', params.idFournisseur, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FournisseurDto>;
    })
  );
}

findFournisseurById.PATH = '/fournisseurs/{idFournisseur}';
