import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Profit } from "./profit";

const API = 'http://www.mocky.io/v2/5b2c010d300000100023487a';

@Injectable({ providedIn: 'root' })
export class ProfitService {

    constructor(private http: HttpClient) {}

    listFromProfits() {
        return this.http
            .get<Profit[]>(API);       
    }
}