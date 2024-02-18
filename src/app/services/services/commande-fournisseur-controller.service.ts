/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { delete3 } from '../fn/commande-fournisseur-controller/delete-3';
import { Delete3$Params } from '../fn/commande-fournisseur-controller/delete-3';
import { deleteArticle } from '../fn/commande-fournisseur-controller/delete-article';
import { DeleteArticle$Params } from '../fn/commande-fournisseur-controller/delete-article';
import { findAll } from '../fn/commande-fournisseur-controller/find-all';
import { FindAll$Params } from '../fn/commande-fournisseur-controller/find-all';
import { findAllLignesCommandesFournisseurByCommandeFournisseurId } from '../fn/commande-fournisseur-controller/find-all-lignes-commandes-fournisseur-by-commande-fournisseur-id';
import { FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params } from '../fn/commande-fournisseur-controller/find-all-lignes-commandes-fournisseur-by-commande-fournisseur-id';
import { findByCode } from '../fn/commande-fournisseur-controller/find-by-code';
import { FindByCode$Params } from '../fn/commande-fournisseur-controller/find-by-code';
import { findById } from '../fn/commande-fournisseur-controller/find-by-id';
import { FindById$Params } from '../fn/commande-fournisseur-controller/find-by-id';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { saveCommandeFournisseur } from '../fn/commande-fournisseur-controller/save-commande-fournisseur';
import { SaveCommandeFournisseur$Params } from '../fn/commande-fournisseur-controller/save-commande-fournisseur';
import { updateArticle } from '../fn/commande-fournisseur-controller/update-article';
import { UpdateArticle$Params } from '../fn/commande-fournisseur-controller/update-article';
import { updateEtatCommande } from '../fn/commande-fournisseur-controller/update-etat-commande';
import { UpdateEtatCommande$Params } from '../fn/commande-fournisseur-controller/update-etat-commande';
import { updateFournisseur } from '../fn/commande-fournisseur-controller/update-fournisseur';
import { UpdateFournisseur$Params } from '../fn/commande-fournisseur-controller/update-fournisseur';
import { updateQuantiteCommande } from '../fn/commande-fournisseur-controller/update-quantite-commande';
import { UpdateQuantiteCommande$Params } from '../fn/commande-fournisseur-controller/update-quantite-commande';

@Injectable({ providedIn: 'root' })
export class CommandeFournisseurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveCommandeFournisseur()` */
  static readonly SaveCommandeFournisseurPath = '/commandesFournisseurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCommandeFournisseur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommandeFournisseur$Response(params: SaveCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return saveCommandeFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCommandeFournisseur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommandeFournisseur(params: SaveCommandeFournisseur$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.saveCommandeFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateQuantiteCommande()` */
  static readonly UpdateQuantiteCommandePath = '/commandesFournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuantiteCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande$Response(params: UpdateQuantiteCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateQuantiteCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuantiteCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande(params: UpdateQuantiteCommande$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateFournisseur()` */
  static readonly UpdateFournisseurPath = '/commandesFournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseur$Response(params: UpdateFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateFournisseur(params: UpdateFournisseur$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateEtatCommande()` */
  static readonly UpdateEtatCommandePath = '/commandesFournisseurs/update/etat/{idCommande}/{etatCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande$Response(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateEtatCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateEtatCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateArticle()` */
  static readonly UpdateArticlePath = '/commandesFournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle$Response(params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return updateArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle(params: UpdateArticle$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.updateArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/commandesFournisseurs/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findAllLignesCommandesFournisseurByCommandeFournisseurId()` */
  static readonly FindAllLignesCommandesFournisseurByCommandeFournisseurIdPath = '/commandesFournisseurs/lignesCommande/{idCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllLignesCommandesFournisseurByCommandeFournisseurId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId$Response(params: FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    return findAllLignesCommandesFournisseurByCommandeFournisseurId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllLignesCommandesFournisseurByCommandeFournisseurId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurId(params: FindAllLignesCommandesFournisseurByCommandeFournisseurId$Params, context?: HttpContext): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLignesCommandesFournisseurByCommandeFournisseurId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>): Array<LigneCommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `findByCode()` */
  static readonly FindByCodePath = '/commandesFournisseurs/filter/{codeCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode$Response(params: FindByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return findByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode(params: FindByCode$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.findByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/commandesFournisseurs/allCommandesFournisseurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<CommandeFournisseurDto>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeFournisseurDto>>): Array<CommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/commandesFournisseurs/delete/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<void> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteArticle()` */
  static readonly DeleteArticlePath = '/commandesFournisseurs/delete/article/{idCommande}/{idLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle$Response(params: DeleteArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return deleteArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle(params: DeleteArticle$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.deleteArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

}
