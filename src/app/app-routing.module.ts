import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }   from './Admin/admin.component';
import { DashboardComponent }   from './Dashboard/dashboard.component';
import { NgModule }             from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'admin',  component: AdminComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}