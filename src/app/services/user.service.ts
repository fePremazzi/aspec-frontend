import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'http://oauth-aspec.me-prd.com/api/test/user';
  private userUrl = '/v2/entities/urn:ngsi-ld:iot:006';
  private pmUrl = 'http://oauth-aspec.me-prd.com/api/test/pm';
  private adminUrl = 'http://oauth-aspec.me-prd.com/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
