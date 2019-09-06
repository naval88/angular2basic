import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RatingModule } from 'ng-starrating';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { ListProductsComponent } from './list-products/list-products.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PopularpostComponent } from './popularpost/popularpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ListcustomersComponent,
    RegisterComponent,
    StudentListComponent,
    LoginComponent,
    BlogComponent,
    AddpostComponent,
    PopularpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    RatingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
