import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular 12 file upload, Angular 12 image upload konusu İPTAL YAPAMADIN
//import { FileSelectDirective } from 'ng2-file-upload';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HttpComponent } from './components/http/http.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { Animations2Component } from './components/animations2/animations2.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReactiveFormComponent,
    HttpComponent,
    HomeComponent,
    ProfileComponent,
    AnimationsComponent,
    Animations2Component,
    ContactComponent,
    ContactDetailsComponent,
    ChildComponent,
    ParentComponent,
    AboutComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, //Angular Animations
    //FileSelectDirective //Angular 12 file upload, Angular 12 image upload konusu İPTAL YAPAMADIN

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
