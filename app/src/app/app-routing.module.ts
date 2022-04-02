import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{
	path:'accueil',
	component:AccueilComponent
},{
	path:'login',
	component:LoginComponent
},{
	path:'**',
	redirectTo:'/accueil'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
