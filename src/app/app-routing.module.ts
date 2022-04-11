import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { TestComponent } from './test/test.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TaskComponent } from './task/task.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIdComponent } from './product-id/product-id.component';

const routes: Routes = [
  //{path: 'learning', component: TaskComponent},
  {path: 'data', component: DataBindingComponent},
  {path: 'product',
  
  children:[
    {path:'view', component:ProductViewComponent},
    {path:'edit',component:ProductEditComponent},
   {path: 'view/:id', component: ProductIdComponent}
  ]
},
  
  {path: 'product/:id', component: ProductComponent},
  {path: 'task/:id1/:id2', component: TaskComponent},//parameterized route
  {path: 'search', component: SearchComponent},//query params
  //{path: '',redirectTo: 'data',pathMatch:'full'},
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },//lazy loading
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },//default value
  {path: '**',component:TestComponent} //wildcard route
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
