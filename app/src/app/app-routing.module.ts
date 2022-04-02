import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { RestoLogInComponent } from './pages/resto/resto-log-in/resto-log-in.component';
import { RestoSignUpComponent } from './pages/resto/resto-sign-up/resto-sign-up.component';

const routes: Routes = [{
	path:'accueil',
	component:AccueilComponent
},{
	path:'login',
	component:LoginComponent
},{
	path:'resto/login',
	component:RestoLogInComponent
},{
	path:'resto/signup',
	component:RestoSignUpComponent
},{
	path:'**',
	redirectTo:'/accueil'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
