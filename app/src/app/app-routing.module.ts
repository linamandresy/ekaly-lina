import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RestoAccueilComponent } from './pages/resto/resto-accueil/resto-accueil.component';
import { RestoListeCommandeComponent } from './pages/resto/resto-liste-commande/resto-liste-commande.component';
import { RestoListePlatComponent } from './pages/resto/resto-liste-plat/resto-liste-plat.component';
import { RestoLogInComponent } from './pages/resto/resto-log-in/resto-log-in.component';
import { RestoNouveauPlatComponent } from './pages/resto/resto-nouveau-plat/resto-nouveau-plat.component';
import { RestoProfileComponent } from './pages/resto/resto-profile/resto-profile.component';
import { RestoSignUpComponent } from './pages/resto/resto-sign-up/resto-sign-up.component';
import { RestoComponent } from './pages/resto/resto.component';
import { RestoAuthGuardService } from './services/resto/resto-auth-guard.service';

const routes: Routes = [{
	path: 'accueil',
	component: AccueilComponent
}, {
	path: 'login',
	component: LoginComponent
}, {
	path: 'resto/login',
	component: RestoLogInComponent
}, {
	path: 'resto/signup',
	component: RestoSignUpComponent
}, {
	path: 'resto',
	component: RestoComponent,
	children: [{
		path: 'accueil',
		component: RestoAccueilComponent,
		canActivate: [RestoAuthGuardService]
	}, {
		path: 'profile',
		component: RestoProfileComponent,
		canActivate: [RestoAuthGuardService]
	},{
		path:'plat/new',
		component:RestoNouveauPlatComponent,
		canActivate:[RestoAuthGuardService]
	},{
		path:'plats',
		component:RestoListePlatComponent,
		canActivate:[RestoAuthGuardService]
	},{
		path:'commandes',
		component:RestoListeCommandeComponent,
		canActivate:[RestoAuthGuardService]
	}]
},{
	path:'error',
	component:ErrorPageComponent
},{
	path: '**',
	redirectTo: '/accueil'
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
