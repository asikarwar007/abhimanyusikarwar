import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
    setTimeout(()=>{
      $('.testimonials-wrapper').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
      });
    },10)
  }

}
