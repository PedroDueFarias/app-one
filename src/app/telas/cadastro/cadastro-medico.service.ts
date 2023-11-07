import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Medico} from "./medico";

@Injectable({
  providedIn: 'root'
})
export class CadastroMedicoService {

  private api = 'https://5tg9hzp9-8000.brs.devtunnels.ms/api/cadastro_medico/'

  constructor(private http: HttpClient) { }

  cadastro(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.api, medico).pipe(
      catchError(err => {return of(err)})
    )
    console.log(medico)
  }
}

