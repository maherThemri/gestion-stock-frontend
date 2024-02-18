/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateQuantiteCommande1$Params {
  idCommande: number;
  idLigneCommande: number;
  quantite: number;
}

export function updateQuantiteCommande1(http: HttpClient, rootUrl: string, params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateQuantiteCommande1.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {});
    rb.path('idLigneCommande', params.idLigneCommande, {});
    rb.path('quantite', params.quantite, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeClientDto>;
    })
  );
}

updateQuantiteCommande1.PATH = '/commandesClients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
