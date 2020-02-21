import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)

    setTimeout(()=>{
      
      $(".text-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
      $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
        $(this).animate({ width: bar_value }, { easing: 'linear' });
      });
      var list :any = document.getElementsByClassName('data-background');

      for (var i = 0; i < list.length; i++) {
        var color = list[i].getAttribute('data-color');
        list[i].style.backgroundColor = "" + color + "";
      }

      $('.portfolio-filter').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });
    var $container = $('.portfolio-wrapper');
    $container.imagesLoaded( function() {
      $('.portfolio-wrapper').isotope({
          // options
          itemSelector: '[class*="col-"]',
          percentPosition: true,
          masonry: {
              // use element for option
              columnWidth: '[class*="col-"]'
          }
      });
    });
    $('.work-content').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: false,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
    },10)
  }

}
