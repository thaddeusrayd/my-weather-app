import { Component } from '@angular/core';

@Component({
  selector: 'mwa-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  addLocation() {
    window.alert('You added a location!')
  }
}
