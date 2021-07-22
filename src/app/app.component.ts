import { Component, NgModule, OnInit, Renderer2, ElementRef } from '@angular/core';

import { AppModule } from './app.module';
import { SkillsComponent } from './components/home/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md/angular-bootstrap-md';

import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

import { Router, RouterModule, NavigationEnd, RouterLinkActive } from '@angular/router'; 



@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
      animations: [
        trigger('routerTransition', [
          transition('* <=> *', [    
         style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(100%)' }, ), { optional: true }),
                query(':enter, :leave', 
                        style({ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0.8 }), 
                              { optional: true }),
                  
                  group([
                      // Leave go Bye Bye
                      query(':leave', [
                          animate('0.15s cubic-bezier(.35,0,.25,1)', 

                          style({ transform: 'translateX(100%)' })),
                      ], { optional: true }),
                      // Enter
                      query(':enter', 
                            animate('0.15s cubic-bezier(.35,0,.25,1)', 
                            style({ transform: 'translateX(0)' })),
                            { optional: true }),
                  ]),
            ]),
      ])
      ],
  host: { '[@routerTransition]': '' }

})
export class AppComponent {
  title = 'app';
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }


  sites: {
    image: string;
    title: string;
    description: string;
    link: string,
    count: string;
    tech1: string; 
    tech2: string; 
    tech3: string; 
    techName1: string;
    techName2: string;
    techName3: string;
  }[]



constructor(private router: Router, private renderer2: Renderer2, private elementRef: ElementRef) {
  
    this.sites = [
    {
      image: "/",
      title: "Muvy Ninja",
      description: "A Web App for finding your local representatives.  Build with Node, Express, Bootstrap and JQuery.",
      link: "https://morning-wave-97013.herokuapp.com/",
      count: "0",
      tech1: "../../../../assets/node.png",
      tech2: "../../../../assets/mongo.jpg",
      tech3: "../../../../assets/oauth2.jpg",
      techName1: "node.js",
      techName2: "MongoDB",
      techName3: "OAuth 2.0"
    },
    {
      image: "",
      title: "WhoRepsYou",
      description: "",
      link: "https://objective-noether-82572f.netlify.app/",
      count: "1",
      tech1: "../../../../assets/jquery.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/google.jpg",
      techName1: "Jquery",
      techName2: "Bootstrap",
      techName3: "Civic Information API"
  
    },
    {
      image: "",
      title: "evcustomhomes.com",
      description: "A Commercial Wordpress website I designed for a local Archictect.",
      link: "https://evcustomhomes.com",
      count: "2",
      tech1: "../../../../assets/wordpress.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/jquery.png",
      techName1: "Wordpress",
      techName2: "Bootstrap 4",
      techName3: "jQuery"
  
    }
  ]
 }


 


 ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

    }

  ngAfterViewInit() {
    // let modalDivs = this.elementRef.nativeElement.querySelectorAll('.modal-container').clone()
    // let mobileContainer = this.elementRef.nativeElement.querySelectorAll('.mobile-container')
    // this.renderer2.appendChild(mobileContainer, modalDivs)
  }
}


// @Component({
    //   selector: 'app-root',
    //   templateUrl: './app.component.html',
    //   styleUrls: ['./app.component.scss'],
    //   animations: [
    //     trigger('routerTransition', [
    //       transition('* <=> *', [    
    //      style({ height: '!' }),
    //             query(':enter', style({ transform: 'translateY(100%)' }, ), { optional: true }),
    //             query(':enter, :leave', 
    //                     style({ position: 'absolute', top: 80, left: 0, right: 0, opacity: 0.8 }), 
    //                           { optional: true }),
                  
    //               group([
    //                   // Leave go Bye Bye
    //                   query(':leave', [
    //                       animate('0.15s cubic-bezier(.35,0,.25,1)', 
    //                       style({ transform: 'translateY(-100%)' })),
    //                   ], { optional: true }),
    //                   // Enter
    //                   query(':enter', 
    //                         animate('0.15s cubic-bezier(.35,0,.25,1)', 
    //                         style({ transform: 'translateY(0)' })),
    //                         { optional: true }),
    //               ]),
    //         ]),
    //   ])
    //   ],



    // real



//     @Component({
//         selector: 'app-root',
//         templateUrl: './app.component.html',
//         styleUrls: ['./app.component.scss'],
//         animations: [
//           trigger('routerTransition', [
//             transition('* <=> *', [    
//            style({ height: '!' }),
//                   query(':enter', style({ transform: 'translateX(100%)' }, ), { optional: true }),
//                   query(':enter, :leave', 
//                           style({ position: 'absolute', top: 80, left: 0, right: 0, opacity: 0.8 }), 
//                                 { optional: true }),
                    
//                     group([
//                         // Leave go Bye Bye
//                         query(':leave', [
//                             animate('0.15s cubic-bezier(.35,0,.25,1)', 
//                             style({ transform: 'translateX(-100%)' })),
//                         ], { optional: true }),
//                         // Enter
//                         query(':enter', 
//                               animate('0.15s cubic-bezier(.35,0,.25,1)', 
//                               style({ transform: 'translateX(0)' })),
//                               { optional: true }),
//                     ]),
//               ]),
//         ])
//         ],
//     host: { '[@routerTransition]': '' }
  
//   })