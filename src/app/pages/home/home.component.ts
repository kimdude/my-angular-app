//Interface for buildings-object
interface building {
  image: string;
  name: string;
  meters: number;
  feet: number;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Array of objects with images and heights
  gallery: building[] = [{
    image: "images/eiffeltornet.jpg",
    name: "Eiffeltornet",
    meters: 312,
    feet: 1023.3
  }, {
    image: "images/BigBen.jpg",
    name: "Big Ben",
    meters: 96,
    feet: 314.96
  }];

}
