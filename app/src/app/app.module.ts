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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    RestoSignUpComponent,
    RestoLogInComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatCardModule,
	MatDividerModule,
	MatButtonModule,
	MatProgressSpinnerModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
