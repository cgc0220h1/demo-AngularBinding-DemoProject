import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/root/app.component';
import {FontSizeComponent} from './component/font-size/font-size.component';
import {MyPetComponent} from './component/my-pet/my-pet.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { ColorPickerComponent } from './component/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    MyPetComponent,
    CalculatorComponent,
    ColorPickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
