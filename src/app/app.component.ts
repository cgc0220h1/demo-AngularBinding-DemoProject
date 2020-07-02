import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-AngularBinding-DemoProject';
  isFontSizeOn = false;
  isMyPetOn = false;
  isCalculatorOn = false;

  showFontSizeApp(): void {
    if (this.isFontSizeOn !== true) {
      this.isFontSizeOn = true;
      this.isMyPetOn = false;
      this.isCalculatorOn = false;
    } else {
      this.isFontSizeOn = false;
    }
  }

  showMyPetApp(): void {
    if (this.isMyPetOn !== true) {
      this.isMyPetOn = true;
      this.isFontSizeOn = false;
      this.isCalculatorOn = false;
    } else {
      this.isMyPetOn = false;
    }
  }

  showCalculatorApp(): void {
    if (this.isCalculatorOn !== true) {
      this.isCalculatorOn = true;
      this.isFontSizeOn = false;
      this.isMyPetOn = false;
    } else {
      this.isCalculatorOn = false;
    }
  }

}
