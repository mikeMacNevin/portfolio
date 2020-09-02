import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : {
    tech: string;
    numb: string;
  }[];

  constructor() { 
    this.skills = [{
        tech: "Javascript",
        numb: "78"
      },
      {
        tech: "HTML/CSS",
        numb: "75"
      },
      {
        tech: "Node.js",
        numb: "70"
      },
      {
        tech: "JQuery",
        numb: "69"
      },

      {
        tech: "Angular 2+",
        numb: "64"
      },
      {
        tech: "Bootstrap 4",
        numb: "62"
      },
      {
        tech: "Wordpress",
        numb: "60"
      },
      {
        tech: "Java",
        numb: "35"
      },
      {
        tech: "Photoshop",
        numb: "34"
      },    
      {
        tech: "React",
        numb: "15"
      },
      {
        tech: "PHP",
        numb: "14"
      },
      {
        tech: "Dancing",
        numb: "7"
      }
    ]
  }
  setStyles() {
    let styles = {
    }
  }

  ngOnInit() {
  }

}
