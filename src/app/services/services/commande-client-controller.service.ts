/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommandeClientDto } from '../models/commande-client-dto';
import { delete4 } from '../fn/commande-client-controller/delete-4';
import { Delete4$Params } from '../fn/commande-client-controller/delete-4';
import { deleteArticle1 } from '../fn/commande-client-controller/delete-article-1';
import { DeleteArticle1$Params } from '../fn/commande-client-controller/delete-article-1';
import { findAllCommandesClients } from '../fn/commande-client-controller/find-all-commandes-clients';
import { FindAllCommandesClients$Params } from '../fn/commande-client-controller/find-all-commandes-clients';
import { findAllLignesCommandesClientByCommandeClientId } from '../fn/commande-client-controller/find-all-lignes-commandes-client-by-commande-client-id';
import { FindAllLignesCommandesClientByCommandeClientId$Params } from '../fn/commande-client-controller/find-all-lignes-commandes-client-by-commande-client-id';
import { findByCode1 } from '../fn/commande-client-controller/find-by-code-1';
import { FindByCode1$Params } from '../fn/commande-client-controller/find-by-code-1';
import { findById1 } from '../fn/commande-client-controller/find-by-id-1';
import { FindById1$Params } from '../fn/commande-client-controller/find-by-id-1';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { saveCommandeClient } from '../fn/commande-client-controller/save-commande-client';
import { SaveCommandeClient$Params } from '../fn/commande-client-controller/save-commande-client';
import { updateArticle1 } from '../fn/commande-client-controller/update-article-1';
import { UpdateArticle1$Params } from '../fn/commande-client-controller/update-article-1';
import { updateClient } from '../fn/commande-client-controller/update-client';
import { UpdateClient$Params } from '../fn/commande-client-controller/update-client';
import { updateEtatCommande1 } from '../fn/commande-client-controller/update-etat-commande-1';
import { UpdateEtatCommande1$Params } from '../fn/commande-client-controller/update-etat-commande-1';
import { updateQuantiteCommande1 } from '../fn/commande-client-controller/update-quantite-commande-1';
import { UpdateQuantiteCommande1$Params } from '../fn/commande-client-controller/update-quantite-commande-1';

@Injectable({ providedIn: 'root' })
export class CommandeClientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveCommandeClient()` */
  static readonly SaveCommandeClientPath = '/commandesClients/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCommandeClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommandeClient$Response(params: SaveCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return saveCommandeClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCommandeClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommandeClient(params: SaveCommandeClient$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.saveCommandeClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateQuantiteCommande1()` */
  static readonly UpdateQuantiteCommande1Path = '/commandesClients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuantiteCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande1$Response(params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateQuantiteCommande1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuantiteCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande1(params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateQuantiteCommande1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateEtatCommande1()` */
  static readonly UpdateEtatCommande1Path = '/commandesClients/update/etat/{idCommande}/{etatCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1$Response(params: UpdateEtatCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateEtatCommande1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1(params: UpdateEtatCommande1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateEtatCommande1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateClient()` */
  static readonly UpdateClientPath = '/commandesClients/update/client/{idCommande}/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient$Response(params: UpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient(params: UpdateClient$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateArticle1()` */
  static readonly UpdateArticle1Path = '/commandesClients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle1$Response(params: UpdateArticle1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateArticle1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle1(params: UpdateArticle1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateArticle1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/commandesClients/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findAllLignesCommandesClientByCommandeClientId()` */
  static readonly FindAllLignesCommandesClientByCommandeClientIdPath = '/commandesClients/lignesCommande/{idCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllLignesCommandesClientByCommandeClientId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesClientByCommandeClientId$Response(params: FindAllLignesCommandesClientByCommandeClientId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    return findAllLignesCommandesClientByCommandeClientId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllLignesCommandesClientByCommandeClientId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesClientByCommandeClientId(params: FindAllLignesCommandesClientByCommandeClientId$Params, context?: HttpContext): Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>): Array<LigneCommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `findByCode1()` */
  static readonly FindByCode1Path = '/commandesClients/filter/{codeCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1$Response(params: FindByCode1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findByCode1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1(params: FindByCode1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findByCode1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findAllCommandesClients()` */
  static readonly FindAllCommandesClientsPath = '/commandesClients/allCommandesClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCommandesClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCommandesClients$Response(params?: FindAllCommandesClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {
    return findAllCommandesClients(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllCommandesClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCommandesClients(params?: FindAllCommandesClients$Params, context?: HttpContext): Observable<Array<CommandeClientDto>> {
    return this.findAllCommandesClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeClientDto>>): Array<CommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `deleteArticle1()` */
  static readonly DeleteArticle1Path = '/commandesClients/update/article/{idCommande}/{idLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle1$Response(params: DeleteArticle1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return deleteArticle1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle1(params: DeleteArticle1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.deleteArticle1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/commandesClients/delete/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
