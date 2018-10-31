import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL  =  'https://jsonplaceholder.typicode.com';


  getPosts(){
    return this.http.get(this.API_URL + '/posts');
  }
}
