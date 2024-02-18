import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleDto } from 'src/app/services/models';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  articleDto: ArticleDto = {};
  @Output()
  suppressionResult = new EventEmitter();
  selectedIdArticleToDelete: number = -1;
  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }
  navigateToEditArticle() {
    this.router.navigate([`modifierArticle/${this.articleDto.id}`]);
  }
  confirmerEtSupprimerArticle() {
    if (this.articleDto.id) {
      this.articleService.deleteArticleById(this.articleDto.id).subscribe({
        next: (res) => {
          this.suppressionResult.emit("success");
        },
        error: (err) => {
          console.log(err);

          this.suppressionResult.emit("error");
        }
      });
    }
  }


}
