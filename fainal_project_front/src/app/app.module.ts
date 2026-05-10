import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetComponent } from './components/pet/pet.component';
import { CommentComponent } from './components/comment/comment.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FishlistComponent } from './components/fishlist/fishlist.component';
import { BirdListComponent } from './components/bird-list/bird-list.component';
import { MammalsListComponent } from './components/mammals-list/mammals-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    CommentComponent,
    NavBarComponent,
    FishlistComponent,
    BirdListComponent,
    MammalsListComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
