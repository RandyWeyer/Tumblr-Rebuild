import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';



const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
