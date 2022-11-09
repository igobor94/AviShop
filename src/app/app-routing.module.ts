import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: ()=> import("./auth/auth.module").then(m => m.AuthModule) },
  { path: 'products', loadChildren: ()=> import("./product/product.module").then(m => m.ProductModule), canActivate:[AuthGuard]},
  { path: 'shopping-cart', loadChildren: ()=> import("./shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}