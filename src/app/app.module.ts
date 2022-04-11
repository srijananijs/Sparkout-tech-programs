import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SubtractComponent } from './subtract/subtract.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CustompipePipe } from './custompipe.pipe';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';


@NgModule({
  declarations: [
    AppComponent,
    SubtractComponent,
    DataBindingComponent,
    CustompipePipe,
    TaskComponent,
    ProductComponent,
    SearchComponent,
    PageNotFoundComponent,
    TestComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:LocationStrategy, useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
