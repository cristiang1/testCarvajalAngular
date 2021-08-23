import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const  API_URL = 'http://localhost:8080/tarjeta/'

@Injectable({
  providedIn:'root'
})
export class DataServices {

  constructor(private http: HttpClient) {}

  getTargetaCliente(): Observable<any>{
    return this.http.get(API_URL+"10618138127");
  }

}
