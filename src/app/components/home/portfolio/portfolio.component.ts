import { Component, OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md/angular-bootstrap-md';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  sites: {
    image: string;
    title: string;
    description: string;
    link: string,
    count: string;
    tech1: string; 
    tech2: string; 
    tech3: string; 
    techName1: string;
    techName2: string;
    techName3: string;
  }[]

   constructor() { 


    this.sites = [
    {
      image: "/",
      title: "Muvy Ninja",
      description: "A Web App for finding your local representatives.  Build with Node, Express, Bootstrap and JQuery.",
      link: "https://muvyninja-5vxuh.ondigitalocean.app/",
      count: "0",
      tech1: "../../../../assets/node.png",
      tech2: "../../../../assets/mongo.jpg",
      tech3: "../../../../assets/oauth2.jpg",
      techName1: "node.js",
      techName2: "MongoDB",
      techName3: "OAuth 2.0"
    },
    {
      image: "",
      title: "WhoRepsYou",
      description: "",
      link: "https://objective-noether-82572f.netlify.app/",
      count: "1",
      tech1: "../../../../assets/jquery.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/google.jpg",
      techName1: "Jquery",
      techName2: "Bootstrap",
      techName3: "Civic Information API"

    },
    {
      image: "",
      title: "evcustomhomes.com",
      description: "A Commercial Wordpress website I designed for a local Archictect.",
      link: "https://evcustomhomes.com",
      count: "2",
      tech1: "../../../../assets/wordpress.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/jquery.png",
      techName1: "Wordpress",
      techName2: "Bootstrap 4",
      techName3: "jQuery"

    }
  ]
   }
  ngOnInit() {
  }

}
