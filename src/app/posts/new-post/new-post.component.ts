import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  permalink: string = ''

  onTitleChanged(event: any) {
    const title = event.target.value
    this.permalink = title.replace(/\s/g, '-')

  }

}
