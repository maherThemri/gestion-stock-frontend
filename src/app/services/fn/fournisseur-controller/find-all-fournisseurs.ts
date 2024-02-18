/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FournisseurDto } from '../../models/fournisseur-dto';

export interface FindAllFournisseurs$Params {
}

export function findAllFournisseurs(http: HttpClient, rootUrl: string, params?: FindAllFournisseurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FournisseurDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllFournisseurs.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FournisseurDto>>;
    })
  );
}

findAllFournisseurs.PATH = '/fournisseurs/allFournisseurs';
