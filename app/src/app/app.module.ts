import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { RestoSignUpComponent } from './pages/resto/resto-sign-up/resto-sign-up.component';
import { RestoLogInComponent } from './pages/resto/resto-log-in/resto-log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestoAccueilComponent } from './pages/resto/resto-accueil/resto-accueil.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RestoComponent } from './pages/resto/resto.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RestoHeaderComponent } from './pages/resto/component/resto-header/resto-header.component';
import { RestoNavSideComponent } from './pages/resto/component/resto-nav-side/resto-nav-side.component';
import { MatMenuModule } from '@angular/material/menu';
import { RestoProfileComponent } from './pages/resto/resto-profile/resto-profile.component';
import { ImageUploaderComponent } from './component/image-uploader/image-uploader.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { RestoEditProfileComponent } from './pages/resto/component/resto-edit-profile/resto-edit-profile.component';
import { MapLocatorComponent } from './component/map-locator/map-locator.component';
import { RestoNouveauPlatComponent } from './pages/resto/resto-nouveau-plat/resto-nouveau-plat.component';
import { RestoListePlatComponent } from './pages/resto/resto-liste-plat/resto-liste-plat.component';
import { RestoListeCommandeComponent } from './pages/resto/resto-liste-commande/resto-liste-commande.component';
import { HeadersNavComponent } from './component/headers-nav/headers-nav.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		AccueilComponent,
		LoginComponent,
		RestoSignUpComponent,
		RestoLogInComponent,
		PageLoaderComponent,
		RestoAccueilComponent,
		ErrorPageComponent,
		RestoComponent,
		RestoHeaderComponent,
		RestoNavSideComponent,
		RestoProfileComponent,
		ImageUploaderComponent,
		RestoEditProfileComponent,
		MapLocatorComponent,
  RestoNouveauPlatComponent,
  RestoListePlatComponent,
  RestoListeCommandeComponent,
  HeadersNavComponent,
  FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxDropzoneModule,
		MatCardModule,
		MatDividerModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatToolbarModule,
		MatSidenavModule,
		MatMenuModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
