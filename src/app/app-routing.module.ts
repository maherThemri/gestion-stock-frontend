import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NouvelArticleComponent } from './pages/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtStk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouveauUtilisateurComponent } from './components/nouveau-utilisateur/nouveau-utilisateur.component';
import { ApplicationGuard } from './services/guard/application.guard';
import { NouvelleCategoryComponent } from './components/nouvelle-category/nouvelle-category.component';

const routes: Routes = [
  { path: "login", component: PageLoginComponent },
  { path: "inscrire", component: PageInscriptionComponent },
  {
    path: "",
    component: PageDashboardComponent,
    canActivate: [ApplicationGuard],
    children: [
      {
        path: "statistiques",
        component: PageStatistiquesComponent
      },
      {
        path: "articles",
        component: ArticlesComponent
      },
      {
        path: "nouvelArticle",
        component: NouvelArticleComponent
      },
      {
        path: "modifierArticle/:idArticle",
        component: NouvelArticleComponent
      },
      {
        path: "mvtstk",
        component: PageMvtstkComponent
      },
      {
        path: "clients",
        component: PageClientComponent
      },
      {
        path: "nouveauClient",
        component: NouveauCltFrsComponent,
        data: {
          origin: "client"
        }
      },
      {
        path: "modifierClient/:id",
        component: NouveauCltFrsComponent,
        data: {
          origin: "client"
        }
      },
      {
        path: "commandesClient",
        component: PageCmdCltFrsComponent,
        data: {
          origin: "client"
        }
      },
      {
        path: "nouvelleCmdClient",
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: "client"
        }
      },
      {
        path: "fournisseurs",
        component: PageFournisseurComponent
      },
      {
        path: "nouveauFournisseur",
        component: NouveauCltFrsComponent,
        data: {
          origin: "fournisseur"
        }
      },
      {
        path: "modifierFournisseur/:id",
        component: NouveauCltFrsComponent,
        data: {
          origin: "fournisseur"
        }
      },
      {
        path: "commandesFournisseur",
        component: PageCmdCltFrsComponent,
        data: {
          origin: "fournisseur"
        }
      },
      {
        path: "nouvelleCmdFournisseur",
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: "fournisseur"
        }
      },
      {
        path: "categories",
        component: PageCategoriesComponent
      },
      {
        path: "nouvelleCategory",
        component: NouvelleCategoryComponent
      },
      {
        path: "modifierCategory/:idCategory",
        component: NouvelleCategoryComponent
      },
      {
        path: "profil",
        component: PageProfilComponent
      },
      {
        path: "changerMotDePasse",
        component: ChangerMotDePasseComponent
      },
      {
        path: "utilisateurs",
        component: PageUtilisateurComponent
      },
      {
        path: "nouveauUtilisateur",
        component: NouveauUtilisateurComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
