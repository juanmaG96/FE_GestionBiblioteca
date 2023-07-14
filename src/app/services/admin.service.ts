import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAdm } from 'src/app/interfaces/usuarioAdm';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private myAppUrl = 'https://localhost:5001/'; //puerto del back
  private myApiUrl = 'api/UsuarioAdm/'; //URL en api

  constructor(private http: HttpClient) { }

  adminLogin(usuario: UsuarioAdm): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.myAppUrl + this.myApiUrl + 'login/admin', usuario, { headers });
  }


  // al hacer peticiones al backend siempre devuelve un observable
  getUsuarioAdm(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  registrarUsuarioAdmin(admin: UsuarioAdm): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, admin);
  }
}
