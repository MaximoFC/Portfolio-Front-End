import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
hysURL = "https://backendportfolio-qype.onrender.com/hys"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.hysURL + "/lista");
  } 

  public details(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.hysURL + "/detail/${id}");
  }

  public save(skill: Skills): Observable<any>{
    return this.httpClient.post<any>(this.hysURL + "/create", skill);
  }

  public update(id:number, skill: Skills): Observable<any>{
    return this.httpClient.put<any>(this.hysURL + "/update/${id}", skill);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.hysURL + "/delete/${id}");
  }
}
