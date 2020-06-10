import { Injectable } from '@angular/core'
import { UsuarioCreate, OngCreate } from './user.module'
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'

})

export class UserService {
    private url = "http://localhost:8090/unidonate/usuarios";
    private urlong = "http://localhost:8090/unidonate/ongs";

    constructor(private http: HttpClient) {}


    createUser(request: UsuarioCreate){
        return this.http.post<UsuarioCreate>(this.url, request);


    }

    createOng(request: OngCreate){
        return this.http.post<OngCreate>(this.urlong, request);
    }

}