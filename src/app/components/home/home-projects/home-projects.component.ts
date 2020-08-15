import { Component, OnInit } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {



  sites: {
    image: string;
    title: string;
    description: string;
    link: string,
    count: number;
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
      image: "/assets/whorepsmobile.jpg",
      title: "Who Reps You",
      description: "A Web App for finding your local representatives.  Build with Node, Express, Bootstrap and JQuery.",
      link: "https://stark-tor-29404.herokuapp.com",
      count: 1,
      tech1: "../../../../assets/node.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/jquery.png",
      techName1: "node.js",
      techName2: "Bootstrap 4",
      techName3: "jQuery"
    },
    {
      image: "../../../../assets/EV-front.jpg",
      title: "EV Homes",
      description: "A Commercial Wordpress website I designed for a local Archictect.",
      link: "https://evcustomhomes.com",
      count: 0,
      tech1: "../../../../assets/wordpress.png",
      tech2: "../../../../assets/jquery.png",
      tech3: "",
      techName1: "Wordpress",
      techName2: "jQuery",
      techName3: ""

    },
    {
      image: "/assets/Reel.png",
      title: "Reel Roulette",
      description: "A website I built for a local real estat firm.  Built with Wordpress",
      link: "https://stark-tor-29404.herokuapp.com",
      count: 2,
      tech1: "../../../../assets/node.png",
      tech2: "../../../../assets/bootstrap.png",
      tech3: "../../../../assets/jquery.png",
      techName1: "node.js",
      techName2: "Bootstrap 4",
      techName3: "jQuery"

    }
  ]

}

  ngOnInit() {
  }

}
