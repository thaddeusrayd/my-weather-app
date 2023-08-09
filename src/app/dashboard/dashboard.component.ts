import { Component, OnInit } from '@angular/core';
import { WeatherLocation } from './weather-location';
import { WeatherService } from './weather.service';
import { MessageService } from '../message.service';
// import { locations } from '../sample-locations';

@Component({
  selector: 'mwa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedWeatherLocation?: WeatherLocation;

  weatherLocations: WeatherLocation[] = [];
  // locations: any[] = [...locations]

  constructor(
    private weatherService: WeatherService,
    private messageService: MessageService  
  ) {}

  ngOnInit(): void {
    this.getWeatherLocations();
  }

  onSelect(weatherLocation: WeatherLocation): void {
    this.selectedWeatherLocation = weatherLocation;
    this.messageService.add(`DashboardComponent: Selected weather location id=${weatherLocation.id}`);
  }

  getWeatherLocations(): void {
    this.weatherService.getWeatherLocations()
      .subscribe(weatherLocations => this.weatherLocations = weatherLocations);
  }
}
