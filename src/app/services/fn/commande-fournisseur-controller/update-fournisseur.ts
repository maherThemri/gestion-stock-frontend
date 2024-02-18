/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeFournisseurDto } from '../../models/commande-fournisseur-dto';

export interface UpdateFournisseur$Params {
  idCommande: number;
  idFournisseur: number;
}

export function updateFournisseur(http: HttpClient, rootUrl: string, params: UpdateFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
  const rb = new RequestBuilder(rootUrl, updateFournisseur.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {});
    rb.path('idFournisseur', params.idFournisseur, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeFournisseurDto>;
    })
  );
}

updateFournisseur.PATH = '/commandesFournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
