import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dynamicHeight = window.innerHeight;

  constructor() {
  }

  // @HostListener('window:resize', ['$event'])
  // private calcViewport(event) {
  //   // this.dynamicHeight = window.outerHeight;

  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   console.log('resizing', vh);

  // }
}
