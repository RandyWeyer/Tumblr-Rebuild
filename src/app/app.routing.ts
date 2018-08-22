import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent }   from './admin/admin.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'view-users',
    component: ViewUsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
  path: 'admin',
  component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
