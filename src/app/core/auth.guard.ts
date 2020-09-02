// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { RouterModule, Routes} from '@angular/router';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(
//     public userService: UserService,
//     private router: Router;
//   ) {}

//   canActivate(): Promise{
//     return new Promise((resolve, reject) => {
//       this.userService.getCurrentUser()
//       .then(user => {
//         this.router.navigate(['/profile']);
//         return resolve(false);
//       }, err => {
//         return resolve(true);
//       })
//     })
//   }
// }
