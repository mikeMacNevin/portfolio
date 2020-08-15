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
        tech: "HTML",
        numb: "78"
      },
      {
        tech: "CSS",
        numb: "78"
      },
      {
        tech: "Javascript",
        numb: "75"
      },
      {
        tech: "Bootstrap 4",
        numb: "65"
      },
      {
        tech: "JQuery",
        numb: "53"
      },
      {
        tech: "Angular 2+",
        numb: "52"
      },
      {
        tech: "Photoshop",
        numb: "40"
      },    
      {
        tech: "Node.js",
        numb: "39"
      },
      {
        tech: "Java",
        numb: "28"
      },
   
      {
        tech: "React",
        numb: "21"
      },
      {
        tech: "PHP",
        numb: "21"
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
