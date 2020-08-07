import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { RealtimeGraphComponent } from './realtime-graph/realtime-graph.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'special', component: SpecialEventsComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'socket', component: RealtimeGraphComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }