import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberOne: string = "";
  numberTwo: string = "";
  total: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.total = +this.numberOne + this.numberTwo;
  }

}
