import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { ClientService } from 'src/app/services/client/client.service';
import { CommandeClientService } from 'src/app/services/commandeClient/commande-client.service';
import { CommandeFournisseurService } from 'src/app/services/commandeFournisseur/commande-fournisseur.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';
import { ArticleDto, ClientDto, CommandeClientDto, CommandeFournisseurDto, LigneCommandeClientDto } from 'src/app/services/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  origin = "";
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  articleErrorMsg: string = '';
  codeArticle: string = '';
  quantite = '';
  lignesCommande: Array<any> = [];
  listArticles: Array<ArticleDto> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  idEntreprise?: number;
  codeCommande: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private fournisseurService: FournisseurService,
    private articleService: ArticleService,
    private cmdClientService: CommandeClientService,
    private cmdFournisseurService: CommandeFournisseurService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    this.findAll();
    this.findAllArticles();
    this.getIdEntreprise();
  }
  getIdEntreprise() {
    this.userService.findUserByEmail(localStorage.getItem('email')!).subscribe({
      next: (data) => {
        this.idEntreprise = data.entreprise?.id;
      }
    });
  }
  findAllArticles(): void {
    this.articleService.findAllArticles().subscribe({
      next: (data) => {
        this.listArticles = data;
      }
    });
  }

  findAll(): void {
    if (this.origin === "client") {
      this.clientService.findAllClients().subscribe({
        next: (data) => {
          this.listClientsFournisseurs = data;
        }
      })
    } else if (this.origin === "fournisseur") {
      this.fournisseurService.findAllFournisseurs().subscribe({
        next: (data) => {
          this.listClientsFournisseurs = data;
        }
      });
    }
  }

  findArticleByCode(codeArticle: string) {
    this.articleErrorMsg = '';
    if (codeArticle) {
      this.articleService.findArticleByCodeArticle(codeArticle).subscribe({
        next: (data) => {
          this.searchedArticle = data
        },
        error: (err) => {
          console.log(err);
          this.articleErrorMsg = "Aucun article avec ce code: " + codeArticle;
        }
      });
    }
  }
  searchArticle() {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticles = this.listArticles
      .filter(art => art.codeArticle?.startsWith(this.codeArticle) || art.designation?.startsWith(this.codeArticle));
  }
  ajouterLigneCommande() {
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          lig.quantite = lig.quantite! + +this.quantite;
        }
      });
    } else {
      const ligneCmd = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite,
      }
      this.lignesCommande.push(ligneCmd);
    }
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire! * +ligne.quantite!
      }
    });

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  selectArticle(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle!;
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();
    if (this.origin === 'client') {
      this.cmdClientService.saveCommande(commande as CommandeClientDto).subscribe({
        next: (data) => {
          this.router.navigate(['commandesClient']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else if (this.origin === 'fournisseur') {
      this.cmdFournisseurService.saveCommande(commande as CommandeFournisseurDto).subscribe({
        next: (data) => {
          this.router.navigate(['commandesFournisseur']);
        }, error: (err) => {
          console.log(err);
        }
      });
    }
  }
  private preparerCommande(): any {
    if (this.origin === 'client') {
      return {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date(),
        etatCommande: 'EN_PREPARATION',
        idEntreprise: this.idEntreprise,
        ligneCommandeClient: this.lignesCommande
      };
    } else if (this.origin === 'fournisseur') {
      return {
        fournisseur: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date(),
        etatCommande: 'EN_PREPARATION',
        idEntreprise: this.idEntreprise,
        ligneCommandeFournisseur: this.lignesCommande
      };
    }
  }
}
