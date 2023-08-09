import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { locations } from 'src/app/sample-locations';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { WeatherLocation } from './weather-location';

@Component({
  selector: 'mwa-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
})
export class WeatherDetailComponent implements OnInit{
  location$!: Observable<WeatherLocation>
  pageTitle: string = 'Weather detail';
  location: Location | undefined;
  locations: any[] = [...locations]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

  }

  
}
