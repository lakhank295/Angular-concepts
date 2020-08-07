import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './authentication/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { EventsComponent } from './events/events.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./authentication/auth.module').then(m => AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(d => DashboardModule) }

  // { path: 'dashboard', component: DashboardComponent },
  //   { path: 'profile', component: ProfileComponent },
  //   { path: 'attendance', component: AttendanceComponent },
  //   { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
  //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
