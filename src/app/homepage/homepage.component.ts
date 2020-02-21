import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  returnToTop(){
    // document.body.scrollTop = 0;
    window.scrollTo(0, 0)
  }

}
