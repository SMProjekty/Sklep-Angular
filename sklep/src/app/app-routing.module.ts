import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'userpanel', component: UserpanelComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
