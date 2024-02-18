/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete$ } from '../fn/ventes-controller/delete';
import { Delete$Params } from '../fn/ventes-controller/delete';
import { findAllVentes } from '../fn/ventes-controller/find-all-ventes';
import { FindAllVentes$Params } from '../fn/ventes-controller/find-all-ventes';
import { findVenteByCode } from '../fn/ventes-controller/find-vente-by-code';
import { FindVenteByCode$Params } from '../fn/ventes-controller/find-vente-by-code';
import { findVenteById } from '../fn/ventes-controller/find-vente-by-id';
import { FindVenteById$Params } from '../fn/ventes-controller/find-vente-by-id';
import { saveVente } from '../fn/ventes-controller/save-vente';
import { SaveVente$Params } from '../fn/ventes-controller/save-vente';
import { VentesDto } from '../models/ventes-dto';

@Injectable({ providedIn: 'root' })
export class VentesControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveVente()` */
  static readonly SaveVentePath = '/ventes/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveVente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveVente$Response(params: SaveVente$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return saveVente(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveVente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveVente(params: SaveVente$Params, context?: HttpContext): Observable<VentesDto> {
    return this.saveVente$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findVenteById()` */
  static readonly FindVenteByIdPath = '/ventes/{idVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findVenteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findVenteById$Response(params: FindVenteById$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return findVenteById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findVenteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findVenteById(params: FindVenteById$Params, context?: HttpContext): Observable<VentesDto> {
    return this.findVenteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findVenteByCode()` */
  static readonly FindVenteByCodePath = '/ventes/{codeVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findVenteByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findVenteByCode$Response(params: FindVenteByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return findVenteByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findVenteByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findVenteByCode(params: FindVenteByCode$Params, context?: HttpContext): Observable<VentesDto> {
    return this.findVenteByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findAllVentes()` */
  static readonly FindAllVentesPath = '/ventes/allVentes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllVentes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllVentes$Response(params?: FindAllVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VentesDto>>> {
    return findAllVentes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllVentes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllVentes(params?: FindAllVentes$Params, context?: HttpContext): Observable<Array<VentesDto>> {
    return this.findAllVentes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VentesDto>>): Array<VentesDto> => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/ventes/delete/{idVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<void> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
