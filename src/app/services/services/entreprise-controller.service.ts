/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete2 } from '../fn/entreprise-controller/delete-2';
import { Delete2$Params } from '../fn/entreprise-controller/delete-2';
import { EntrepriseDto } from '../models/entreprise-dto';
import { findAllEntreprises } from '../fn/entreprise-controller/find-all-entreprises';
import { FindAllEntreprises$Params } from '../fn/entreprise-controller/find-all-entreprises';
import { findEntrepriseById } from '../fn/entreprise-controller/find-entreprise-by-id';
import { FindEntrepriseById$Params } from '../fn/entreprise-controller/find-entreprise-by-id';
import { saveEntreprise } from '../fn/entreprise-controller/save-entreprise';
import { SaveEntreprise$Params } from '../fn/entreprise-controller/save-entreprise';

@Injectable({ providedIn: 'root' })
export class EntrepriseControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveEntreprise()` */
  static readonly SaveEntreprisePath = '/entreprises/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEntreprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEntreprise$Response(params: SaveEntreprise$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
    return saveEntreprise(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEntreprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEntreprise(params: SaveEntreprise$Params, context?: HttpContext): Observable<EntrepriseDto> {
    return this.saveEntreprise$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>): EntrepriseDto => r.body)
    );
  }

  /** Path part for operation `findEntrepriseById()` */
  static readonly FindEntrepriseByIdPath = '/entreprises/{idEntreprise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findEntrepriseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findEntrepriseById$Response(params: FindEntrepriseById$Params, context?: HttpContext): Observable<StrictHttpResponse<EntrepriseDto>> {
    return findEntrepriseById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findEntrepriseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findEntrepriseById(params: FindEntrepriseById$Params, context?: HttpContext): Observable<EntrepriseDto> {
    return this.findEntrepriseById$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntrepriseDto>): EntrepriseDto => r.body)
    );
  }

  /** Path part for operation `findAllEntreprises()` */
  static readonly FindAllEntreprisesPath = '/entreprises/allEntreprises';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllEntreprises()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEntreprises$Response(params?: FindAllEntreprises$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EntrepriseDto>>> {
    return findAllEntreprises(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllEntreprises$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllEntreprises(params?: FindAllEntreprises$Params, context?: HttpContext): Observable<Array<EntrepriseDto>> {
    return this.findAllEntreprises$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseDto>>): Array<EntrepriseDto> => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/entreprises/delete/{idEntreprise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
