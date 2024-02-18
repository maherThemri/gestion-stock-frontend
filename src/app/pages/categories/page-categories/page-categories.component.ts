import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/app/services/models';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {
  categories: Array<CategoryDto> = [];
  idCatToDelete?: number = -1;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.findAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      }
    });
  }
  modifierCategory(id?: number) {
    this.router.navigate([`modifierCategory/${id}`]);
  }

  selectCatTOSupprimer(id?: number) {
    this.idCatToDelete = id;
  }

  confirmerEtSupprimerCat() {
    if (this.idCatToDelete !== -1) {
      this.categoryService.deleteCategorie(this.idCatToDelete!).subscribe({
        next: (response) => {
          console.log(response);
          this.getAllCategories();
          this.toastrService.success("Opération réussie.", "Good!");
        },
        error: (err) => {
          console.log(err);
          this.toastrService.error(err.error.message, "Oops!");
        }
      });
    }
  }
  annulerSupprime() {
    this.idCatToDelete = -1;
  }
  nouvelleCategory(): void {
    this.router.navigate(['nouvelleCategory']);
  }

}
