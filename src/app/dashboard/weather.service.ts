import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherLocation } from './weather-location';
import { locations } from '../sample-locations';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private messageService: MessageService) { }

  getWeatherLocations(): Observable<WeatherLocation[]> {
    const weatherLocations = of(locations);
    this.messageService.add('WeatherService: fetched weather locations')
    return weatherLocations;
  }

  getWeatherLocation(id: number): Observable<WeatherLocation> {
    const weatherLocation = locations.find(l => l.id === id)!;
    return of(weatherLocation);
  }
}
