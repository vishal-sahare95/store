import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../config/login/account.service';

@Injectable({
  providedIn: 'root'
})
export class InguardGuard implements CanActivate {
  constructor(private account:AccountService ,private router:Router ){}
  canActivate()
    {

       if (this.account.islog()){
        return true
       }
       alert('you are not log in');
       
       this.router.navigateByUrl('sign-in')
       return false
  }
  
}
