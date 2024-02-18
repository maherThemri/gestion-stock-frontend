import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleDto } from 'src/app/services/models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Array<ArticleDto> = [];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(): void {
    this.articleService.findAllArticles().subscribe({
      next: (data) => {
        this.articles = data
      }
    });
  }
  nouvelArticle(): void {
    this.router.navigate(['nouvelArticle']);
  }
  handleSuppression(event: any) {
    if (event === 'success') {
      this.toastrService.success("Opération réussie.", "Good!");
      this.findAll();
    } else {
      this.toastrService.error("Opération échouée.", "Oops!");
    }
  }

}
