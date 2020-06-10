import { Injectable } from '@angular/core'
import {DonateCreate } from './doar.module'
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'

})

export class UserService {

    private urldona = "http://localhost:8090/unidonate/donates";

    constructor(private http: HttpClient) {}
    

    createDonate(request: DonateCreate){
        return this.http.post<DonateCreate>(this.urldona, request);
    }
}