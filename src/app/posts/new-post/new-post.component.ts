import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, AngularEditorModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent implements OnInit {
  categoryService = inject(CategoryService);

  permalink: string = '';
  imgSrc: any = '/placeholder-image.png';
  selectedImg: any;
  categories: any;

  ngOnInit(): void {
    this.getAllCategory()
  }

  onTitleChanged(event: any) {
    const title = event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

  async getAllCategory(){
    this.categories = await this.categoryService.getCategory()
  }
}
