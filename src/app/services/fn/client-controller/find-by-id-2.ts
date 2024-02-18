/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientDto } from '../../models/client-dto';

export interface FindById2$Params {
  idClient: number;
}

export function findById2(http: HttpClient, rootUrl: string, params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
  const rb = new RequestBuilder(rootUrl, findById2.PATH, 'get');
  if (params) {
    rb.path('idClient', params.idClient, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClientDto>;
    })
  );
}

findById2.PATH = '/clients/{idClient}';
