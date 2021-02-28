import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, MdbCardComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardBodyComponent } from 'angular-bootstrap-md';

import { ReactiveFormsModule } from '@angular/forms';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';

// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { appRoutes } from './app.routes';

// article
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from "@angular/material/input"; 

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { HomeProjectsComponent } from './components/home/home-projects/home-projects.component';
import { ResumeComponent } from 'src/app/components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
// import {MessageToMikeService } from './components/services/message-to-mike.service';

const appRoutes: Routes =  [

  {
    path:'', 
    component: SkillsComponent,
    data: {
      state: 'skills'
      }  
    },
    {
    path:'resume', 
    component: ResumeComponent,
    data: {
      state: 'resume'
      }  
    },
    {
      path:'projects', 
      component: PortfolioComponent,
      data: {
        state: 'projects'
        }  
      }
    // {
    //   path:'contact', 
    //   component: ContactComponent,
    //   canActivate: [AuthGuard],
    //   data: {
    //     state: 'contact'
    //     }  
    //   }

];



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    IntroComponent,
    SkillsComponent,
    HomeProjectsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    RouterModule.forRoot(appRoutes), 
    MDBBootstrapModule.forRoot()
  ],
  // providers: [ MessageToMikeService ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
