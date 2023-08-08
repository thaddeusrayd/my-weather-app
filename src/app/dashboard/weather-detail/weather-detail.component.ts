import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/sample-locations';

@Component({
  selector: 'mwa-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit{
  pageTitle: string = 'Weather detail';
  location: Location | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.location = {
      'city': 'Chicago',
      'currentTemp': 78,
      'conditions': 'Sunny',
      'id': id
    }
    this.pageTitle += `: ${this.location.city}`
  }
}
