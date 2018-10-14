import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProfitComponent } from './profit/profit.component';
import { FilterByProfit } from './profit/filter-by-profit.pine';

@NgModule({
  declarations: [
    AppComponent,
    ProfitComponent,
    FilterByProfit
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
