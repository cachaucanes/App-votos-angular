import { Component } from '@angular/core';
import { Link } from './link/link.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-LINKS-VOTES-APP';

  links: Link[];

  constructor(){
    this.links = [
      new Link('angular', 'http://angular.io', 100),
      new Link('twiter', 'http://twiter.co', 20),
      new Link('youtube', 'http://youtube.com', 10),
      new Link('facebook', 'http://facebook.com', 100)
    ]
  }

  addLink(title:HTMLInputElement, link:HTMLInputElement){
    this.links.push(new Link(title.value, link.value))
    title.value = '';
    link.value = '';
    return false
  }
}
