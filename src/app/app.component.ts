import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.routerState.root.snapshot;
        const child = route.firstChild;
        if (child) {
          const title = child.data['title'];
          if (title) {
            this.titleService.setTitle(title);
          }
        }
      }
    });
  }

  title = 'FrontEnd';
}
