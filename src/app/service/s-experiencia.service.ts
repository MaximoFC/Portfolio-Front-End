import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProjects } from '../model/my-projects';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  private URL = 'https://backendportfolio-7c1v.onrender.com/hys';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<MyProjects[]>{
    return this.httpClient.get<MyProjects[]>(this.URL + "/lista");
  } 

  public detail(id:number): Observable<MyProjects>{
    return this.httpClient.get<MyProjects>(this.URL + "/detail/${id}");
  }

  public save(experiencia: MyProjects): Observable<any>{
    return this.httpClient.post<any>(this.URL + "/create", experiencia);
  }

  public update(id: number, experiencia: MyProjects): Observable<any>{
    return this.httpClient.put<any>(this.URL + "/update/${id}", experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + "/delete/${id}");
  }
}
