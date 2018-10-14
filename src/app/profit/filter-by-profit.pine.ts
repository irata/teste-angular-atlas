import { Pipe, PipeTransform } from '@angular/core';

import { Profit } from './profit';

@Pipe({ name: 'filterByProfit'})
export class FilterByProfit implements PipeTransform {

    transform(profits: Profit[], profitQuery: any) {
        
        if(profitQuery) {
            profitQuery = profitQuery
            .trim()
            .toLowerCase();

            return profits.filter(data => 
                data.dateMoviment.includes(profitQuery)
                ||data.proft.includes(profitQuery) 
                ||data.profitPercentage.toFixed(4).includes(profitQuery)
                ||data.balance.toFixed(10).includes(profitQuery) 
            );
        } else {
            return profits;
        }
    }

}