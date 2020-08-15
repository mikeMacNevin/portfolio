import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, MdbCardComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardBodyComponent } from 'angular-bootstrap-md';

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

const appRoutes: Routes =  [


  {
    path:'', 
    component: HomeComponent,
    data: {
      state: 'home'
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
      path:'contact', 
      component: ContactComponent,
      data: {
        state: 'contact'
        }  
      }

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
    RouterModule.forRoot(appRoutes), 
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
