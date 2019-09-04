import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
	{'path':'','component':BlogComponent},
	{'path':'product-details/:productId','component':ProductDetailsComponent},
	{'path':'cart','component':CartComponent},
	{'path':'customers','component':ListcustomersComponent},
	{'path':'sign-up','component':RegisterComponent},
	{'path':'sign-in','component':LoginComponent},
	{'path':'add-post','component':AddpostComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
