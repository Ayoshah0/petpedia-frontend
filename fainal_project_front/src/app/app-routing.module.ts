import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FishlistComponent } from './components/fishlist/fishlist.component';
import { AuthService } from './services/auth.service';
import { BirdListComponent } from './components/bird-list/bird-list.component';
import { MammalsListComponent } from './components/mammals-list/mammals-list.component';
import { PetComponent } from './components/pet/pet.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'Fish',
    // canActivate:[AuthService],
    component:FishlistComponent
  },

  {
    path:'Bird',
    component:BirdListComponent
  },

  {
    path:'Mammals',
    component:MammalsListComponent
  },
{
   path:'Pet',
   component:PetComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
