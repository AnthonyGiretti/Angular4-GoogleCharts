import { AdminComponent } from './Admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './Dashboard/Charts/combochart.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
import { DataTableModule } from 'angular-4-data-table';
import {DonutChartComponent} from './Dashboard/Charts/donutchart.component'
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import {TableComponent} from './Dashboard/Table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    ComboChartComponent,
    DonutChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
