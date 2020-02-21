import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)

    setTimeout(()=>{
      
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
