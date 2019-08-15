import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {GLOBAL} from './global';
import {Persona} from '../app/models/persona'

@Injectable()
export class PersonaService { 
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    pruebas(){
        return "Hola mundo!!"
    }

    create(persona: Persona): Observable<any>{
        let json = JSON.stringify(persona);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'personas', params, {headers: headers});
    }

    getPersona(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url+'personas/' + id , {headers: headers});

    }

    getPersonas(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url+'personas', {headers: headers});

    }
    
    update( contactSource, id): Observable<any>{
        let json = JSON.stringify(contactSource);
        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this.url + 'personas/' + id, params, {headers:headers});
    }

    delete(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url + 'personas/' + id, {headers:headers});

    }
}