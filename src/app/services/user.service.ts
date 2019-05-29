import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'http://oauth-aspec.me-prd.com/api/test/user';
  private userUrl = '/v2/entities/urn:ngsi-ld:iot:006';
  private pmUrl = 'http://oauth-aspec.me-prd.com/api/test/pm';
  private adminUrl = 'http://oauth-aspec.me-prd.com/api/test/admin';

  private head = new HttpHeaders() .append('accept', 'application/json') .append('content-type', 'application/json') .append('param1', 'valor1') .append('param2', 'valor2');

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<Object> {
    return this.http.get(this.userUrl, { responseType: 'json' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
