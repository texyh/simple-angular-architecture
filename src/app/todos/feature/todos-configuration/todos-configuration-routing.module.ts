import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../list-todos/list-todos.module').then(m => m.ListTodosModule) }, 
  { path: 'create', loadChildren: () => import('../create-todo/create-todo.module').then(m => m.CreateTodoModule) }, 
  { path: ':id', loadChildren: () => import('../edit-todo/edit-todo.module').then(m => m.EditTodoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosConfigurationRoutingModule { }
