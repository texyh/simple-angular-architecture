import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'todos', loadChildren: () => import('./todos/feature/list-todos/list-todos.module').then(m => m.ListTodosModule) }, 
  { path: 'todos/create', loadChildren: () => import('./todos/feature/create-todo/create-todo.module').then(m => m.CreateTodoModule) }, 
  { path: 'todos/:id', loadChildren: () => import('./todos/feature/edit-todo/edit-todo.module').then(m => m.EditTodoModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
