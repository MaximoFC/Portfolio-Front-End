import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { HomeComponent } from './components/home/home.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationComponent,
    LoginComponent,
    MyProjectsComponent,
    HomeComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
