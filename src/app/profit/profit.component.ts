import { Component, OnInit } from '@angular/core';
import { ProfitService } from './profit.service';

import { Profit } from './profit';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {

  profits: Profit[] = []; 

  constructor(private profitService: ProfitService) { }

  ngOnInit(): void {
    this.getProfits();
  }
  
  getProfits(){
    this.profitService
    .listFromProfits()
    .subscribe(result => {
      this.profits = result.sort();
      
      this.profits[0].balance = parseFloat(this.profits[0].proft);
      for (let index = 1; index < this.profits.length; index++) {
          let resultBalance =  parseFloat(this.profits[index -1].proft) + parseFloat(this.profits[index].proft);
          this.profits[index].balance = resultBalance;
      }
    });
  }
}

