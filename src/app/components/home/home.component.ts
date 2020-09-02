import { Component, OnInit } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { SkillsComponent } from './skills/skills.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { MDBBootstrapModule, MdbCardComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardBodyComponent  } from 'angular-bootstrap-md';

import { Router, RouterModule, NavigationEnd, RouterLinkActive } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('routerTransition', [
  //     transition('* <=> *', [    
  //    style({ height: '!' }),
  //           query(':enter', style({ transform: 'translateX(100%)' }, ), { optional: true }),
  //           query(':enter, :leave', 
  //                   style({ position: 'absolute', top: 80, left: 0, right: 0, opacity: 0.8 }), 
  //                         { optional: true }),
              
  //             group([
  //                 // Leave go Bye Bye
  //                 query(':leave', [
  //                     animate('0.2s cubic-bezier(.35,0,.25,1)', 
  //                     style({ transform: 'translateX(-100%)' })),
  //                 ], { optional: true }),
  //                 // Enter
  //                 query(':enter', 
  //                       animate('0.2s cubic-bezier(.35,0,.25,1)', 
  //                       style({ transform: 'translateX(0)' })),
  //                       { optional: true }),
  //             ]),
  //       ]),
  // ])
  // ],
  // host: { '[@routerTransition]': '' }

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
