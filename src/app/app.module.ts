import { AdminComponent } from './Admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './Dashboard/Charts/combochart.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
import { DataTableModule } from 'angular-4-data-table';
import { FormsModule }   from '@angular/forms';
import { GoogleComboChartService } from './Services/google-combo-chart.service';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './Dashboard/Charts/piechart.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    ComboChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule ,
    FormsModule
  ],
  providers: [GoogleComboChartService,GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
