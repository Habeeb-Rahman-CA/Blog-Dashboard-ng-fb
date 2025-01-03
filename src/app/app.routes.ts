import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'posts', component: AllPostComponent },
    { path: 'posts/new', component: NewPostComponent }
];
