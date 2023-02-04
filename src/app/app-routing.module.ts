import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InguardGuard } from './guards/inguard.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'sign-in'
  },
  {
    path:"sign-in",
    loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule),
  },
  {
    path:"dashboard",
    loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate: [InguardGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
