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

  showApp(): void {
    if (this.isFontSizeOn !== true) {
      this.isFontSizeOn = true;
      if (this.isMyPetOn !== false) {
        this.isMyPetOn = false;
      }
    } else {
      this.isFontSizeOn = false;
      this.isMyPetOn = true;
    }
  }
}
