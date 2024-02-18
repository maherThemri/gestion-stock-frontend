/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/fournisseur-controller/delete-1';
import { Delete1$Params } from '../fn/fournisseur-controller/delete-1';
import { findAllFournisseurs } from '../fn/fournisseur-controller/find-all-fournisseurs';
import { FindAllFournisseurs$Params } from '../fn/fournisseur-controller/find-all-fournisseurs';
import { findFournisseurById } from '../fn/fournisseur-controller/find-fournisseur-by-id';
import { FindFournisseurById$Params } from '../fn/fournisseur-controller/find-fournisseur-by-id';
import { FournisseurDto } from '../models/fournisseur-dto';
import { saveFournisseur } from '../fn/fournisseur-controller/save-fournisseur';
import { SaveFournisseur$Params } from '../fn/fournisseur-controller/save-fournisseur';

@Injectable({ providedIn: 'root' })
export class FournisseurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveFournisseur()` */
  static readonly SaveFournisseurPath = '/fournisseurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveFournisseur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFournisseur$Response(params: SaveFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
    return saveFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveFournisseur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFournisseur(params: SaveFournisseur$Params, context?: HttpContext): Observable<FournisseurDto> {
    return this.saveFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>): FournisseurDto => r.body)
    );
  }

  /** Path part for operation `findFournisseurById()` */
  static readonly FindFournisseurByIdPath = '/fournisseurs/{idFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFournisseurById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFournisseurById$Response(params: FindFournisseurById$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
    return findFournisseurById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFournisseurById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFournisseurById(params: FindFournisseurById$Params, context?: HttpContext): Observable<FournisseurDto> {
    return this.findFournisseurById$Response(params, context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>): FournisseurDto => r.body)
    );
  }

  /** Path part for operation `findAllFournisseurs()` */
  static readonly FindAllFournisseursPath = '/fournisseurs/allFournisseurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllFournisseurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllFournisseurs$Response(params?: FindAllFournisseurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FournisseurDto>>> {
    return findAllFournisseurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllFournisseurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllFournisseurs(params?: FindAllFournisseurs$Params, context?: HttpContext): Observable<Array<FournisseurDto>> {
    return this.findAllFournisseurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>): Array<FournisseurDto> => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/fournisseurs/delete/{idFournisseur})';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
