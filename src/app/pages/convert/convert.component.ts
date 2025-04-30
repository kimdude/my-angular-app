import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule], //Adding forms module
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  //Set default numbers
  numA: number = 0;
  result: number = 0;

  //Set default units
  unit1: string = "Meter";
  unit2: string = "Feet";

  //Setting units
  newUnits(e: Event): void {
    const value: string = (e.target as HTMLInputElement).value;

    if (value === "Celcius till Fahrenheit") {
      this.unit1 = "Celcius";
      this.unit2 = "Fahrenheit";

    } else if (value === "Fahrenheit till Celcius") {
      this.unit1 = "Fahrenheit";
      this.unit2 = "Celcius";

    } else if (value === "Feet till Meter") {
      this.unit1 = "Feet";
      this.unit2 = "Meter";

    } else if (value === "Meter till Feet") {
      this.unit1 = "Meter";
      this.unit2 = "Feet";

    } 
  }

  //Handling convert button
  convert(): void {
    if (this.unit1 === "Celcius") {
      this.CtoF();
    } else if (this.unit1 === "Fahrenheit") {
      this.FtoC();
    } else if (this.unit1 === "Feet") {
      this.FtoM();
    } else if (this.unit1 === "Meter") {
      this.MtoF();
    }

  }

  //Converting Celsius to Fahrenheit
  CtoF(): void {
    const Fahrenheit: number = (this.numA*9/5)+32;
    this.result = Fahrenheit;
  }

  //Converting Fahrenheit to Celsius
  FtoC (): void {
    const Celcius: number = (this.numA-32)*5/9;
    this.result = Celcius;
  }

  //Converting Feet to Meter
  FtoM(): void {
    const Meters: number = this.numA*0.3048;
    this.result = Meters;
  }

  //Converting Meter to Feet
  MtoF(): void {
    const Feet: number = this.numA*3.28;
    this.result = Feet;
  }

}
