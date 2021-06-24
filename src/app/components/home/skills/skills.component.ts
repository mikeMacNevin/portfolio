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
        tech: "JavaScript",
        numb: "79"
      },
      {
        tech: "HTML/CSS",
        numb: "78"
      },
      {
        tech: "Node.js",
        numb: "77"
      },
      {
        tech: "React",
        numb: "77"
      },
      {
        tech: "Angular",
        numb: "74"
      },

      {
        tech: "Bootstrap",
        numb: "74"
      },
      {
        tech: "JQuery",
        numb: "70"
      },
      {
        tech: "Java",
        numb: "65"
      },
      {
        tech: "Wordpress",
        numb: "59"
      },
      {
        tech: "Photoshop",
        numb: "54"
      },    
      {
        tech: "PHP",
        numb: "47"
      },
      {
        tech: "Dancing",
        numb: "25"
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
