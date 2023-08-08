import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherDetailComponent } from './dashboard/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: 'locations', component: DashboardComponent },
  { path: 'locations/:id', component: WeatherDetailComponent },
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: '**', redirectTo: 'locations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
