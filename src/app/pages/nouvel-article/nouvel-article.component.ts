import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ArticleDto, CategoryDto } from 'src/app/services/models';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { PhotoControllerService } from 'src/app/services/services';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  articleDto: ArticleDto = {};
  categoryDto: CategoryDto = {};
  listeCategorie: CategoryDto[] = [];
  idEntreprise?: number;
  file: File | null = null;
  imgUrl: string | ArrayBuffer = "assets/product.jpg";
  imageArticle: string | ArrayBuffer = "assets/uploads/";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private toastrService: ToastrService,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.getIdEntreprise();
    this.findAllCategories();
    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (idArticle) {
      this.articleService.findArticleById(idArticle).subscribe({
        next: (data) => {
          this.articleDto = data;
          this.categoryDto = data.category!;
          this.imageArticle += data.photo!;
        }
      });
    }
  }
  findAllCategories() {
    this.categoryService.findAllCategories().subscribe({
      next: (data) => {
        this.listeCategorie = data;
      }
    });
  }
  getIdEntreprise() {
    let email: string = "";
    email = localStorage.getItem("email")!;
    this.userService.findUserByEmail(email).subscribe({
      next: (data) => {
        this.idEntreprise = data.entreprise?.id;
      }
    });
  }
  save() {
    this.articleDto.category = this.categoryDto;
    this.articleDto.idEntreprise = this.idEntreprise;
    this.articleService.saveArticle(this.articleDto).subscribe({
      next: (data) => {
        this.toastrService.success("Opération réussie.", "Good!");
        this.savePhoto(data.id);
      },
      error: (err) => {
        this.toastrService.error("Opération échouée.", "Oops!");
      }
    });
  }

  cancel(): void {
    this.router.navigate(["articles"]);
  }

  calculerTTC(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
    }
  }

  onFileInput(files: FileList | null) {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = () => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
            this.imageArticle = fileReader.result;
          }
        };
      }
    }
  }
  /* savePhoto(idArticle?: number, titre?: any): void {
     if (idArticle && this.file && titre) {
       // const params: SavePhoto$Params = {
       //   id: idArticle,
       //   title: titre,
       //   context: 'article',
       //   body: {
       //     'file': this.file
       //   }
       // }
       this.photoService.savePhoto(idArticle, titre, 'article', this.file).subscribe({
         next: () => {
           this.router.navigate(["articles"]);
         }
       });
     } else {
       this.router.navigate(["articles"]);
     }
   }*/
  savePhoto(idArticle?: number) {
    if (idArticle && this.file) {
      this.articleService.uploadFile(this.file, this.file?.name, idArticle).subscribe({
        next: (data) => {
          this.router.navigate(["articles"]);
        }
      })
    } else {
      this.router.navigate(["articles"]);
    }
  }

}
