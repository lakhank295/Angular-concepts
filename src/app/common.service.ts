import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = environment.apiUrl;
  dummyUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  registerUser(userData: User) {
    return this.http.post(this.apiUrl + 'register', userData)
  }

  loginUser(userData: User) {
    return this.http.post<any>(this.apiUrl + 'login', userData)
  }

  getEvents() {
    return this.http.get<any>(this.apiUrl + 'events')
  }

  getSpecialEvents() {
    return this.http.get<any>(this.apiUrl + 'special')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getToDos() {
    return this.http.get(this.dummyUrl);
  }
}
