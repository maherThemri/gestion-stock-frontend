/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changerMotDePasse } from '../fn/utilisateur-controller/changer-mot-de-passe';
import { ChangerMotDePasse$Params } from '../fn/utilisateur-controller/changer-mot-de-passe';
import { deleteUtilsateur } from '../fn/utilisateur-controller/delete-utilsateur';
import { DeleteUtilsateur$Params } from '../fn/utilisateur-controller/delete-utilsateur';
import { findAllUtilisateurs } from '../fn/utilisateur-controller/find-all-utilisateurs';
import { FindAllUtilisateurs$Params } from '../fn/utilisateur-controller/find-all-utilisateurs';
import { findByEmail } from '../fn/utilisateur-controller/find-by-email';
import { FindByEmail$Params } from '../fn/utilisateur-controller/find-by-email';
import { findUtilisateurById } from '../fn/utilisateur-controller/find-utilisateur-by-id';
import { FindUtilisateurById$Params } from '../fn/utilisateur-controller/find-utilisateur-by-id';
import { invalidateAccount } from '../fn/utilisateur-controller/invalidate-account';
import { InvalidateAccount$Params } from '../fn/utilisateur-controller/invalidate-account';
import { saveUtilisateur } from '../fn/utilisateur-controller/save-utilisateur';
import { SaveUtilisateur$Params } from '../fn/utilisateur-controller/save-utilisateur';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { validateAccount } from '../fn/utilisateur-controller/validate-account';
import { ValidateAccount$Params } from '../fn/utilisateur-controller/validate-account';

@Injectable({ providedIn: 'root' })
export class UtilisateurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `changerMotDePasse()` */
  static readonly ChangerMotDePassePath = '/utilisateurs/update/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changerMotDePasse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changerMotDePasse$Response(params: ChangerMotDePasse$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return changerMotDePasse(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changerMotDePasse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changerMotDePasse(params: ChangerMotDePasse$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.changerMotDePasse$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `saveUtilisateur()` */
  static readonly SaveUtilisateurPath = '/utilisateurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUtilisateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUtilisateur$Response(params: SaveUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return saveUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUtilisateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUtilisateur(params: SaveUtilisateur$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.saveUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `validateAccount()` */
  static readonly ValidateAccountPath = '/utilisateurs/validate/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateAccount$Response(params: ValidateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return validateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateAccount(params: ValidateAccount$Params, context?: HttpContext): Observable<number> {
    return this.validateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `invalidateAccount()` */
  static readonly InvalidateAccountPath = '/utilisateurs/invalidate/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invalidateAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidateAccount$Response(params: InvalidateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return invalidateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `invalidateAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidateAccount(params: InvalidateAccount$Params, context?: HttpContext): Observable<number> {
    return this.invalidateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findUtilisateurById()` */
  static readonly FindUtilisateurByIdPath = '/utilisateurs/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUtilisateurById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUtilisateurById$Response(params: FindUtilisateurById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return findUtilisateurById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUtilisateurById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUtilisateurById(params: FindUtilisateurById$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.findUtilisateurById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findByEmail()` */
  static readonly FindByEmailPath = '/utilisateurs/find/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail$Response(params: FindByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return findByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail(params: FindByEmail$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.findByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `findAllUtilisateurs()` */
  static readonly FindAllUtilisateursPath = '/utilisateurs/allUtilisateur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllUtilisateurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUtilisateurs$Response(params?: FindAllUtilisateurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return findAllUtilisateurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllUtilisateurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllUtilisateurs(params?: FindAllUtilisateurs$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.findAllUtilisateurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

  /** Path part for operation `deleteUtilsateur()` */
  static readonly DeleteUtilsateurPath = '/utilisateurs/delete/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUtilsateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUtilsateur$Response(params: DeleteUtilsateur$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUtilsateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUtilsateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUtilsateur(params: DeleteUtilsateur$Params, context?: HttpContext): Observable<void> {
    return this.deleteUtilsateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
