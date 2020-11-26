import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL  =  'https://jsonplaceholder.typicode.com';
  API_CORONA_URL  =  'https://api.covid19api.com/dayone/country/sweden/status/confirmed';


  getPosts() {
    return this.http.get(this.API_URL + '/posts');
  }

  getCoronaData() {
    return this.http.get(this.API_CORONA_URL);
  }
}
