/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VentesDto } from '../../models/ventes-dto';

export interface FindVenteById$Params {
  idVente: number;
}

export function findVenteById(http: HttpClient, rootUrl: string, params: FindVenteById$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
  const rb = new RequestBuilder(rootUrl, findVenteById.PATH, 'get');
  if (params) {
    rb.path('idVente', params.idVente, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<VentesDto>;
    })
  );
}

findVenteById.PATH = '/ventes/{idVente}';
