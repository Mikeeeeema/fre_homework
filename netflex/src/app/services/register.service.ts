import { Injectable } from '@angular/core';
import { RegisterInfo } from './interfaces/moive.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerData: RegisterInfo = {
    username: '',
    password: '',
    email: '',
    role: '',
    tmdb_key: '',
  };
  private apiUrl = 'http://localhost:5566/api/v1/auth';

  constructor(private http: HttpClient) {}

  setRegisterData(data: Partial<RegisterInfo>) {
    this.registerData = { ...this.registerData, ...data };
  }

  getRegisterData() {
    return this.registerData;
  }

  signUp(): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, this.registerData);
  }
}
