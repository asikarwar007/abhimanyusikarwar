import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)

    var list :any = document.getElementsByClassName('data-background');

    for (var i = 0; i < list.length; i++) {
      var color = list[i].getAttribute('data-color');
      list[i].style.backgroundColor = "" + color + "";
    }
  }

}
