import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
private URL = 'https://backendportfolio-7c1v.onrender.com/experiencia';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + "/lista");
  } 

  public details(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + "/detail/${id}");
  }

  public save(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + "/create", skill);
  }

  public update(id:number, skill: Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL + "/update/${id}", skill);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.URL + "/delete/${id}");
  }
}
