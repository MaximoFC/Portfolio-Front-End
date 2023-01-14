import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProjects } from '../model/my-projects';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL="https://backendportfolio-qype.onrender.com/experiencia"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<MyProjects[]>{
    return this.httpClient.get<MyProjects[]>(this.expURL + "/lista");
  } 

  public detail(id:number): Observable<MyProjects>{
    return this.httpClient.get<MyProjects>(this.expURL + "/detail/${id}");
  }

  public save(experiencia: MyProjects): Observable<any>{
    return this.httpClient.post<any>(this.expURL + "/create", experiencia);
  }

  public update(id: number, experiencia: MyProjects): Observable<any>{
    return this.httpClient.put<any>(this.expURL + "/update/${id}", experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + "/delete/${id}");
  }
}
