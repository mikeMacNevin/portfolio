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
        numb: "82"
      },
      {
        tech: "HTML/CSS",
        numb: "78"
      },
      {
        tech: "Node.js",
        numb: "75"
      },
      {
        tech: "React",
        numb: "75"
      },
      {
        tech: "Angular",
        numb: "70"
      },

      {
        tech: "Bootstrap",
        numb: "70"
      },
      {
        tech: "JQuery",
        numb: "69"
      },
      {
        tech: "Java",
        numb: "60"
      },
      {
        tech: "Wordpress",
        numb: "54"
      },
      {
        tech: "Photoshop",
        numb: "52"
      },    
      {
        tech: "PHP",
        numb: "50"
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
