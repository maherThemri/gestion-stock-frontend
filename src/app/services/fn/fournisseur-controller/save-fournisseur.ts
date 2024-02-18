/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FournisseurDto } from '../../models/fournisseur-dto';

export interface SaveFournisseur$Params {
      body: FournisseurDto
}

export function saveFournisseur(http: HttpClient, rootUrl: string, params: SaveFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, saveFournisseur.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveFournisseur.PATH = '/fournisseurs/create';
