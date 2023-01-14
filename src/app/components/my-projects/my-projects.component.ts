import { Component, OnInit } from '@angular/core';
import { MyProjects } from 'src/app/model/my-projects';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  expe: MyProjects[] = [];

  constructor(private sExperiencia: SExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

}
