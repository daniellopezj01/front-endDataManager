import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class crimeService {
    constructor(private http: HttpClient) { }
  
    public getCategory(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/category`);
    }

    public getOfensive(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/ofensive`);
    }
    
    public getcrimeOrTrafic(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/crimeOrTrafic`);
    }
    
    public getdistrict(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/district`);
    }
    
    public getyear(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/year`);
    }
}