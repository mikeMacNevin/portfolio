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

  items : {
    icon: string;
    category: string;
    words: string
  }[];


  constructor() { 
    this.skills = [
      {
        tech: "Javascript",
        numb: "92"
      },
      {
        tech: "HTML/CSS",
        numb: "84"
      },
      {
        tech: "Node.js",
        numb: "80"
      },
      {
        tech: "React",
        numb: "78"
      },
      {
        tech: "Angular",
        numb: "78"
      },

      {
        tech: "Bootstrap",
        numb: "73"
      },
      {
        tech: "JQuery",
        numb: "72"
      },
      {
        tech: "Java",
        numb: "65"
      },
      {
        tech: "Wordpress",
        numb: "65"
      },
      {
        tech: "Photoshop",
        numb: "60"
      },    
      {
        tech: "PHP",
        numb: "55"
      },
      {
        tech: "Dancing",
        numb: "35"
      }
    ];

    this.items = [
      {
        icon: "fa fa fa-bars",
        category: "Favorite Stack:",
        words: "Node/React/Express/MongoDB"
      },
      {
        icon: "fa fa-book",
        category: "Learning Now:",
        words: "GraphQL, React Context API"
      },
      {
        icon: "fa fa-file-code-o",
        category: "Favorite Language:",
        words: "JavaScript"
      },
      {
        icon: "fa fa-cogs",
        category: "Favorite Framwork:",
        words: "React"
      },
      {
        icon: "fa fa-database",
        category: "Preferred Database Tools:",
        words: "MongoDB, MySQL, GraphQL"
      },
      {
        icon: "fa fa-pie-chart",
        category: "Web Dev Experience:",
        words: "Front-end: 60%; Back-end 40%"
      },
      {
        icon: "fa fa-university",
        category: "Current Industry:",
        words: "Software, Banking, Customer Solutions"
      },
      {
        icon: "fa fa-briefcase",
        category: "Fulltime Position:",
        words: "Account Specialist Team Manager"
      },

      {
        icon: "fa fa-certificate",
        category: "College Certificate:",
        words: "Application Programming: Java"
      },
      {
        icon: "fa fa-certificate",
        category: "College Certificate:",
        words: "Web Design & Development"
      },

 
  


      
     
    ]
  }
  setStyles() {
    let styles = {
    }
  }

  ngOnInit() {
  }

}
