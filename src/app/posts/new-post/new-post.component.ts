import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  permalink: string = ''
  imgSrc: any = '/placeholder-image.png'
  selectedImg: any

  onTitleChanged(event: any) {
    const title = event.target.value
    this.permalink = title.replace(/\s/g, '-')

  }

  showPreview($event: any){
    const reader = new FileReader()
    reader.onload = (e) => {
      this.imgSrc = e.target?.result
    }
    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0]
  }

}
