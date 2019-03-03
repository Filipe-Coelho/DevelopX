import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from './components/index/Bank';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  withdraw(amount, clientId): Observable<any> {
    return this.http
      .get(`${this.uri}/withdraw/${amount}/${clientId}`);
      // .map(response => response.toString())
  }

  updateClient(id, name, identifier): Observable<any> {
    const params = {
      id: id,
      identifier: identifier,
      name: name
    };
    return this.http
      .post(`${this.uri}/updateClient`, params );
  }

  getHistory(): Observable<any>{
    return this.http
      .get(`${this.uri}/history/`);
  }


  
  deleteHistory(id): Observable<any>{
    return this.http
      .get(`${this.uri}/deleteHistory/${id}`);
  }

  deleteClient(id): Observable<any>{
    return this.http
      .get(`${this.uri}/deleteClient/${id}`);
  }
  
  getListClients(): Observable<any>{
    return this.http
      .get(`${this.uri}/clients/`);
  }

  createClient(identification: number, name: string ): Observable<any> {
    const params = {
      identifier: identification,
      name: name
    };
    return  this.http.post(`${this.uri}/createClient`, params);
  }

  addAdUnit(unit_name, unit_price) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(unit_name, unit_price, id) {

  const obj = {
    unit_name: unit_name,
    unit_price: unit_price
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
