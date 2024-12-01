import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'category', component: CategoryComponent}
];
