import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openTab(){
    $('header.desktop-header-1, main.content, header.mobile-header-1').toggleClass('open');

    $('main.content').on( 'click', function() {
        $('header.desktop-header-1, main.content, header.mobile-header-1').removeClass('open');
    });
  }
}
