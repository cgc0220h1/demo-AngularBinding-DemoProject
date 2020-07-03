import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/root/app.component';
import {FontSizeComponent} from './component/font-size/font-size.component';
import {MyPetComponent} from './component/my-pet/my-pet.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { ColorPickerComponent } from './component/color-picker/color-picker.component';
import { GithubSearchComponent } from './component/github-search/github-search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    MyPetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    GithubSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
