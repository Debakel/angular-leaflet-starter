import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class NominatimService {

  constructor(private http: Http) { }

  search(q: string){
    let url = 'https://nominatim.openstreetmap.org/search?q=' + q + '&format=json&limit=10';
    return this.http.get(url).map(res => res.json())

  }
}