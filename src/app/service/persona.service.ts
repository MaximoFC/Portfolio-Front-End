import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = 'https://backendportfolio-7c1v.onrender.com/personas/';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ "traer/perfil");
  }
}
