import { AboutComponent } from './components/about/about.component';
import { ParentComponent } from './components/parent/parent.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { Animations2Component } from './components/animations2/animations2.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { HttpComponent } from './components/http/http.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'',component:HttpComponent},
  { path: 'reactive-form',component:ReactiveFormComponent},
  { path: 'http',component:HttpComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'animasyon', component:AnimationsComponent},
  { path: 'animasyon2', component:Animations2Component},
  { path: 'contact-details', component:ContactDetailsComponent},
  { path: 'parent', component:ParentComponent},
  { path: 'about', component:AboutComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
