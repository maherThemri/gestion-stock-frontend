/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { VentesControllerService } from './services/ventes-controller.service';
import { UtilisateurControllerService } from './services/utilisateur-controller.service';
import { PhotoControllerService } from './services/photo-controller.service';
import { MvtStkControllerService } from './services/mvt-stk-controller.service';
import { FournisseurControllerService } from './services/fournisseur-controller.service';
import { EntrepriseControllerService } from './services/entreprise-controller.service';
import { CommandeFournisseurControllerService } from './services/commande-fournisseur-controller.service';
import { CommandeClientControllerService } from './services/commande-client-controller.service';
import { ClientControllerService } from './services/client-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { ArticleControllerService } from './services/article-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    VentesControllerService,
    UtilisateurControllerService,
    PhotoControllerService,
    MvtStkControllerService,
    FournisseurControllerService,
    EntrepriseControllerService,
    CommandeFournisseurControllerService,
    CommandeClientControllerService,
    ClientControllerService,
    CategoryControllerService,
    AuthenticationControllerService,
    ArticleControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
