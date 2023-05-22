import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = '';
  amount = '';
  miles: number = 0;
  onNameChange(value: string) {
    this.name = value;
  }

  onDateInput(value: string) {
    this.date = value;
  }

  onAmountInput(value: string) {
    this.amount = value;
  }

  onMilesChange(value: string) {
    this.miles = Number(value);
  }
}
