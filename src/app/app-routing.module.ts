import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddItemComponent } from './views/add-item/add-item.component';
import { TodoViewComponent } from './views/todo-view/todo-view.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'todo/:id', component: TodoViewComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
