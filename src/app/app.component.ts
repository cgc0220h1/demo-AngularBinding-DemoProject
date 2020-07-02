import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-AngularBinding-DemoProject';
  isFontSizeOn = false;
  isMyPetOn = false;

  showFontSizeApp(): void {
    if (this.isFontSizeOn !== true) {
      this.isFontSizeOn = true;
      this.isMyPetOn = false;
    } else {
      this.isFontSizeOn = false;
    }
  }

  showMyPetApp(): void {
    if (this.isMyPetOn !== true) {
      this.isMyPetOn = true;
      this.isFontSizeOn = false;
    } else {
      this.isMyPetOn = false;
    }
  }
}
