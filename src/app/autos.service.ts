import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos-nodejs.herokuapp.com/api/autos';
  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL);
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto);
  }

  deleteAuto(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosURL}/${auto._id}`);
  }

  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(`${this.autosURL}`, auto);
  }
}
