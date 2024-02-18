/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LigneCommandeFournisseurDto } from '../../models/ligne-commande-fournisseur-dto';

export interface FindHistorisqueCommandeFournisseur$Params {
  idArticle: number;
}

export function findHistorisqueCommandeFournisseur(http: HttpClient, rootUrl: string, params: FindHistorisqueCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
  const rb = new RequestBuilder(rootUrl, findHistorisqueCommandeFournisseur.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
    })
  );
}

findHistorisqueCommandeFournisseur.PATH = '/articles/historique/commandefournisseur/{idArticle}';
