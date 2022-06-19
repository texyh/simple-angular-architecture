import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTodosRoutingModule } from './list-todos-routing.module';
import { ListTodosComponent } from './list-todos.component';


@NgModule({
  declarations: [
    ListTodosComponent
  ],
  imports: [
    CommonModule,
    ListTodosRoutingModule
  ]
})
export class ListTodosModule { }
