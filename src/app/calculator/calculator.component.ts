import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  now: Date = new Date();
  currentYear = this.now.getFullYear();
  currentMonth = this.now.getUTCMonth() + 1;
  currentDay = this.now.getDate();
  // user entry
  entryYear;
  entryDay;
  entryMonth;
  //
  maxday = 31;
  maxmonth = 12;

  maxdate() {
    if (this.entryMonth === this.currentMonth && this.entryYear === this.currentYear) {
      this.maxday = this.currentDay - 1;
    }
    if (this.entryDay === this.currentDay && this.entryYear === this.currentYear) {
      this.maxmonth = this.currentMonth - 1;
    }
    if (this.entryMonth === 2)
      this.maxday = 29;
    else if ([4, 6, 9, 11].includes(this.entryMonth))
      this.maxday = 30;
    else
      this.maxday = 31;
  }

  // result
  nbreYears;
  nbreMonths;
  nbreDays;

  calculDate() {

    // years
    this.nbreYears = this.currentYear - this.entryYear;

    // months
    if (this.currentMonth >= this.entryMonth)
      // months when current month is greater
      this.nbreMonths = this.currentMonth - this.entryMonth;
    else {
      this.nbreYears--;
      this.nbreMonths = 12 + this.currentMonth - this.entryMonth;
    }

    // days
    if (this.currentDay >= this.entryDay)
      // days when the current date is greater
      this.nbreDays = this.currentDay - this.entryDay;
    else {
      this.nbreMonths--;
      this.nbreDays = 31 + this.currentDay - this.entryDay;

      if (this.nbreMonths < 0) {
        this.nbreMonths = 11;
        this.nbreYears--;
      }
    }
  }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  affichage(nbre) {
    let result = "";
    if (!nbre) {
      result = "--";
    }
    else
      if (nbre < 10) {
        result = this.padTo2Digits(nbre);
      }
      else {
        result = nbre;
      }
    return result;
  }
  dateValid() {


  }
}
