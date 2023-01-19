import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/login`;

  constructor(private http: HttpClient) { }

  login(formData: FormData) {
    return this.http.post(this.apiUrl, formData, {withCredentials: true});
  }
}