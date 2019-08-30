import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{'path':'','component':ListProductsComponent},
	{'path':'product-details/:productId','component':ProductDetailsComponent},
	{'path':'cart','component':CartComponent},
	{'path':'customers','component':ListcustomersComponent},
	{'path':'sign-up','component':RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
