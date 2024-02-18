/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ArticleDto } from '../models/article-dto';
import { delete7 } from '../fn/article-controller/delete-7';
import { Delete7$Params } from '../fn/article-controller/delete-7';
import { findAll1 } from '../fn/article-controller/find-all-1';
import { FindAll1$Params } from '../fn/article-controller/find-all-1';
import { findAllArticleByIdCategory } from '../fn/article-controller/find-all-article-by-id-category';
import { FindAllArticleByIdCategory$Params } from '../fn/article-controller/find-all-article-by-id-category';
import { findArticleById } from '../fn/article-controller/find-article-by-id';
import { FindArticleById$Params } from '../fn/article-controller/find-article-by-id';
import { findByCodeArticle } from '../fn/article-controller/find-by-code-article';
import { FindByCodeArticle$Params } from '../fn/article-controller/find-by-code-article';
import { findHistorisqueCommandeClient } from '../fn/article-controller/find-historisque-commande-client';
import { FindHistorisqueCommandeClient$Params } from '../fn/article-controller/find-historisque-commande-client';
import { findHistorisqueCommandeFournisseur } from '../fn/article-controller/find-historisque-commande-fournisseur';
import { FindHistorisqueCommandeFournisseur$Params } from '../fn/article-controller/find-historisque-commande-fournisseur';
import { findHistorisqueVentes } from '../fn/article-controller/find-historisque-ventes';
import { FindHistorisqueVentes$Params } from '../fn/article-controller/find-historisque-ventes';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { saveArticle } from '../fn/article-controller/save-article';
import { SaveArticle$Params } from '../fn/article-controller/save-article';

@Injectable({ providedIn: 'root' })
export class ArticleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveArticle()` */
  static readonly SaveArticlePath = '/articles/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveArticle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArticle$Response(params: SaveArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return saveArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveArticle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArticle(params: SaveArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.saveArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findArticleById()` */
  static readonly FindArticleByIdPath = '/articles/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findArticleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findArticleById$Response(params: FindArticleById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findArticleById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findArticleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findArticleById(params: FindArticleById$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findArticleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findByCodeArticle()` */
  static readonly FindByCodeArticlePath = '/articles/{codeArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle$Response(params: FindByCodeArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findByCodeArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle(params: FindByCodeArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findByCodeArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findHistorisqueVentes()` */
  static readonly FindHistorisqueVentesPath = '/articles/historique/vente/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistorisqueVentes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueVentes$Response(params: FindHistorisqueVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {
    return findHistorisqueVentes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistorisqueVentes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueVentes(params: FindHistorisqueVentes$Params, context?: HttpContext): Observable<Array<LigneVenteDto>> {
    return this.findHistorisqueVentes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneVenteDto>>): Array<LigneVenteDto> => r.body)
    );
  }

  /** Path part for operation `findHistorisqueCommandeFournisseur()` */
  static readonly FindHistorisqueCommandeFournisseurPath = '/articles/historique/commandefournisseur/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistorisqueCommandeFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueCommandeFournisseur$Response(params: FindHistorisqueCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    return findHistorisqueCommandeFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistorisqueCommandeFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueCommandeFournisseur(params: FindHistorisqueCommandeFournisseur$Params, context?: HttpContext): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistorisqueCommandeFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>): Array<LigneCommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `findHistorisqueCommandeClient()` */
  static readonly FindHistorisqueCommandeClientPath = '/articles/historique/commandeclient/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistorisqueCommandeClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueCommandeClient$Response(params: FindHistorisqueCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    return findHistorisqueCommandeClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistorisqueCommandeClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistorisqueCommandeClient(params: FindHistorisqueCommandeClient$Params, context?: HttpContext): Observable<Array<LigneCommandeClientDto>> {
    return this.findHistorisqueCommandeClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>): Array<LigneCommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `findAllArticleByIdCategory()` */
  static readonly FindAllArticleByIdCategoryPath = '/articles/filter/category/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllArticleByIdCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategory$Response(params: FindAllArticleByIdCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAllArticleByIdCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllArticleByIdCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategory(params: FindAllArticleByIdCategory$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/articles/allArticle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/articles/delete/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<void> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
