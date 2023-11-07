import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Medico} from "./medico";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'https://5tg9hzp9-8000.brs.devtunnels.ms/api/login/'

  constructor(private http: HttpClient) { }

  login(medico: Medico):Observable<any>{
    return this.http.post<any>(this.api, medico).pipe(
      catchError(err => {return of(err)}))
  }
}
