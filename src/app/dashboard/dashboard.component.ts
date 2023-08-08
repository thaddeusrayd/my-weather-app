import { Component } from '@angular/core';
import { locations } from '../sample-locations';

@Component({
  selector: 'mwa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  locations: any[] = [...locations]

}
