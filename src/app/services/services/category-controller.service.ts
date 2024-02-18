/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryDto } from '../models/category-dto';
import { delete6 } from '../fn/category-controller/delete-6';
import { Delete6$Params } from '../fn/category-controller/delete-6';
import { findAllCategories } from '../fn/category-controller/find-all-categories';
import { FindAllCategories$Params } from '../fn/category-controller/find-all-categories';
import { findByCode2 } from '../fn/category-controller/find-by-code-2';
import { FindByCode2$Params } from '../fn/category-controller/find-by-code-2';
import { findById3 } from '../fn/category-controller/find-by-id-3';
import { FindById3$Params } from '../fn/category-controller/find-by-id-3';
import { saveCategory } from '../fn/category-controller/save-category';
import { SaveCategory$Params } from '../fn/category-controller/save-category';

@Injectable({ providedIn: 'root' })
export class CategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveCategory()` */
  static readonly SaveCategoryPath = '/categories/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCategory$Response(params: SaveCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return saveCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCategory(params: SaveCategory$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.saveCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/categories/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findByCode2()` */
  static readonly FindByCode2Path = '/categories/filter/{codeCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2$Response(params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findByCode2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2(params: FindByCode2$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findByCode2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findAllCategories()` */
  static readonly FindAllCategoriesPath = '/categories/allCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCategories$Response(params?: FindAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return findAllCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCategories(params?: FindAllCategories$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.findAllCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `delete6()` */
  static readonly Delete6Path = '/categories/delete/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: Delete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: Delete6$Params, context?: HttpContext): Observable<void> {
    return this.delete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
