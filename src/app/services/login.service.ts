import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { Register } from '../models/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(register:Register): Observable<Register> {
    return this.http.post<Register>(`http://localhost:4000/users/authenticate`, register).pipe(
      tap(user => this.Token = user.token)
    );
  }

  set Token(_token:string) {
    localStorage.setItem("token", _token);
  }

  get Token():string {
    return localStorage.getItem("token");
  }

 get isLoggedIn():boolean{
    return !!this.Token;
 }

}
