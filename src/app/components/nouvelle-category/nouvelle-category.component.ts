import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/app/services/models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.scss']
})
export class NouvelleCategoryComponent implements OnInit {
  categoryDto: CategoryDto = {};
  idEntreprise?: number;
  idCategory?: number;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getIdEntreprise();
    this.getCategoryById();
  }

  getCategoryById() {
    this.idCategory = this.activatedRoute.snapshot.params['idCategory'];
    this.categoryService.findCategoryById(this.idCategory!).subscribe({
      next: (data) => {
        this.categoryDto = data;
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

  enregistrer() {
    this.categoryDto.idEntreprise = this.idEntreprise;
    this.categoryService.saveCat(this.categoryDto).subscribe({
      next: (data) => {
        this.router.navigate(['categories']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

}
