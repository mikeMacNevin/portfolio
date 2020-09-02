import { Component, NgModule, OnInit } from '@angular/core';

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
                        style({ position: 'absolute', top: 80, left: 0, right: 0, opacity: 0.8 }), 
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


constructor(private router: Router) { }


 ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
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