/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneCommandeClientDto } from '../../models/ligne-commande-client-dto';

export interface FindHistorisqueCommandeClient$Params {
  idArticle: number;
}

export function findHistorisqueCommandeClient(http: HttpClient, rootUrl: string, params: FindHistorisqueCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
  const rb = new RequestBuilder(rootUrl, findHistorisqueCommandeClient.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigneCommandeClientDto>>;
    })
  );
}

findHistorisqueCommandeClient.PATH = '/articles/historique/commandeclient/{idArticle}';
