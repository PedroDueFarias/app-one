import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'https://5tg9hzp9-5000.brs.devtunnels.ms/login'

  constructor(private http: HttpClient) { }

  login(medico: any):Observable<any>{
    return this.http.post<any>(this.api, medico).pipe(
      catchError(err => {return of(err)}))
  }
}
