import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
    setTimeout(()=>{
      $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
     
        $(this).animate({ width: bar_value }, { easing: 'linear' });
      });
    },10)
  }

}
