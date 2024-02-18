/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ClientDto } from '../models/client-dto';
import { delete5 } from '../fn/client-controller/delete-5';
import { Delete5$Params } from '../fn/client-controller/delete-5';
import { findAllClients } from '../fn/client-controller/find-all-clients';
import { FindAllClients$Params } from '../fn/client-controller/find-all-clients';
import { findById2 } from '../fn/client-controller/find-by-id-2';
import { FindById2$Params } from '../fn/client-controller/find-by-id-2';
import { saveClient } from '../fn/client-controller/save-client';
import { SaveClient$Params } from '../fn/client-controller/save-client';

@Injectable({ providedIn: 'root' })
export class ClientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveClient()` */
  static readonly SaveClientPath = '/clients/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClient$Response(params: SaveClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return saveClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClient(params: SaveClient$Params, context?: HttpContext): Observable<ClientDto> {
    return this.saveClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/clients/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<ClientDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findAllClients()` */
  static readonly FindAllClientsPath = '/clients/allClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllClients$Response(params?: FindAllClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
    return findAllClients(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllClients(params?: FindAllClients$Params, context?: HttpContext): Observable<Array<ClientDto>> {
    return this.findAllClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>): Array<ClientDto> => r.body)
    );
  }

  /** Path part for operation `delete5()` */
  static readonly Delete5Path = '/clients/delete/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: Delete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: Delete5$Params, context?: HttpContext): Observable<void> {
    return this.delete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
