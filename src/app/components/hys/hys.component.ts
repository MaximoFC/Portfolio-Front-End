import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skills[] = [];

  constructor(private skills: SkillsService) { }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void {
    this.skills.lista().subscribe(data => {this.skill = data;})
  }
}
