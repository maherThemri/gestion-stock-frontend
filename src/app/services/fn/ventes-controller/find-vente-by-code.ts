/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VentesDto } from '../../models/ventes-dto';

export interface FindVenteByCode$Params {
  codeVente: string;
}

export function findVenteByCode(http: HttpClient, rootUrl: string, params: FindVenteByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
  const rb = new RequestBuilder(rootUrl, findVenteByCode.PATH, 'get');
  if (params) {
    rb.path('codeVente', params.codeVente, {});
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

findVenteByCode.PATH = '/ventes/{codeVente}';
