import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryData } from './category-data';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categoryService = inject(CategoryService)
  categoryList: CategoryData[] = []
  category: string = ''
  formStatus: string = 'Add'

  ngOnInit(): void {
    this.getAllCategory()
  }

  onSubmit(formData: NgForm) {
    let categoryData: CategoryData = {
      category: formData.value.category
    }
    this.categoryService.addCategory(categoryData)
    formData.reset()
    this.getAllCategory()

  }

  async getAllCategory() {
    this.categoryList = await this.categoryService.getCategory()
  }

  onDelete(category: string){
  this.categoryService.deleteCategory(category)
  this.getAllCategory()
  }

}
