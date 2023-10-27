import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CadastroMedicoService {

  private api = 'http://127.0.0.1:5000/api/'

  constructor(private http: HttpClient) { }

  cadastro(medico: any): Observable<any> {
    return this.http.post<any>(this.api, medico).pipe(
      catchError(err => {return of(err)})
    )
  }
  login(medico: any):Observable<any>{
    return this.http.post<any>(this.api, medico).pipe(
      catchError(err => {return of(err)}))
  }
}

