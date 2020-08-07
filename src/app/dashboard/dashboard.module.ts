import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component'
import { SpecialEventsComponent } from './special-events/special-events.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
import { MatTableExporterModule } from 'mat-table-exporter';
import { RealtimeGraphComponent } from './realtime-graph/realtime-graph.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SpecialEventsComponent,
    UserListComponent,
    RealtimeGraphComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatTableExporterModule
  ]
})
export class DashboardModule { }
