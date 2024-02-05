import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phonet } from '../models/phonet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonetService {

  constructor(public httpclient : HttpClient) { }
  apiurl='http://localhost:8080/phonet';
  getPhoneTById(idphonet : number){
    return this.httpclient.get<Phonet>(this.apiurl +"/" + idphonet)
  }
  getAllPhonets(){
    return this.httpclient.get<Phonet[]>(this.apiurl);
  }
  updatePhonetDetails(id: number, updatedPhonetData: Partial<Phonet>): Observable<Phonet> {
    const url = `${this.apiurl}/${id}`;
    return this.httpclient.put<Phonet>(url, updatedPhonetData);
  }
  deleteUser(id: number) {
    return this.httpclient.delete<any>(this.apiurl +"/"+"supprimer"+ '/' + id);
  }
  createPhonet(phonet: Phonet): Observable<Phonet> {
    return this.httpclient.post<Phonet>(this.apiurl ,phonet);
  }
  getPhoneByTel(tel: number) {
    return this.httpclient.get<Phonet>(this.apiurl +"/" +"byTel"+"/"+tel);
  }
}
