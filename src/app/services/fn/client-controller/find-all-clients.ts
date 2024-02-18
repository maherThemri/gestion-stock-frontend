/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientDto } from '../../models/client-dto';

export interface FindAllClients$Params {
}

export function findAllClients(http: HttpClient, rootUrl: string, params?: FindAllClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllClients.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ClientDto>>;
    })
  );
}

findAllClients.PATH = '/clients/allClients';
