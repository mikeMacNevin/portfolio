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
        numb: "72"
      },
      {
        tech: "HTML/CSS",
        numb: "68"
      },
      {
        tech: "Node.js",
        numb: "65"
      },
      {
        tech: "React",
        numb: "65"
      },
      {
        tech: "Angular",
        numb: "60"
      },

      {
        tech: "Bootstrap",
        numb: "60"
      },
      {
        tech: "JQuery",
        numb: "59"
      },
      {
        tech: "Java",
        numb: "50"
      },
      {
        tech: "Wordpress",
        numb: "44"
      },
      {
        tech: "Photoshop",
        numb: "42"
      },    
      {
        tech: "PHP",
        numb: "40"
      },
      {
        tech: "Dancing",
        numb: "17"
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
