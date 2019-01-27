import { Component, Host, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  public dynamicHeight = window.innerHeight;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  // @HostListener('window:resize', ['$event'])
  // private calcViewport(event) {
  //   // this.dynamicHeight = window.outerHeight;

  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   console.log('resizing', vh);

  // }
}
