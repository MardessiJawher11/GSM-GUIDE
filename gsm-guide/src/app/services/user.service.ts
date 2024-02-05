import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpclient: HttpClient){ }
  apiurl='http://localhost:8080/user';
  connexion(user: any): Observable<any> {
    return this.httpclient.post<any>(`${this.apiurl}/connexion`, user);
  }
  getUserById(iduser: number) {
    return this.httpclient.get<User>(this.apiurl +"/" + iduser);
  }
  updateUserDetails(id: number, updatedUserData: Partial<User>): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.httpclient.put<User>(url, updatedUserData);
  }
deleteUser(id: number) {
    return this.httpclient.delete<any>(this.apiurl +"/"+"supprimer"+ '/' + id);
  }
  createUser(user: User): Observable<User> {
    return this.httpclient.post<User>(this.apiurl ,user);
  }
  checkUsernameAvailability(username: string): Observable<boolean> {
    return this.httpclient.post<boolean>(`${this.apiurl}/check-username`, { username });
  }

}
