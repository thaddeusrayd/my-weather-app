import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherLocation } from './weather-location';
import { WeatherService } from './weather.service';

@Component({
  selector: 'mwa-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
})
export class WeatherDetailComponent implements OnInit{
  weatherLocation: WeatherLocation | undefined;
  // locations: any[] = [...locations]

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getWeatherLocation();
  }

  getWeatherLocation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.weatherService.getWeatherLocation(id)
      .subscribe(weatherLocation => this.weatherLocation = weatherLocation)
  }
}
