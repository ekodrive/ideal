$(document).ready(function() {
    $('.owl-carousel').owlCarousel({      
        animateOut: 'fadeOut',
        smartSpeed:1200,
        autoplay:true,
        autoplayTimeout:5000,
        items:1,
        margin: 0,
        loop:true,
        dots: true,
        nav: true,
        navText:['<i class="faleft fas fa-angle-left"></i>','<i class="faright fas fa-angle-right"></i>'],
      });

    $('.count').counterUp({
        delay: 150,
        time: 1500
    });

    $('#lightgallery').lightGallery();
});

$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide',
                share:false,
                autoplay:false,
                autoplayControls:false,
                hash:false,
                fullScreen: false
            });
        }
    });
});

$(document).ready(function(){
    var windows = $(window);
    var Header = $(".header-nav");
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll > 120) {
            $(".header-nav").addClass('sticky');
            $(".scroll-logo").css("display", "inline-block");
            $(".scroll-social").css("display", "inline-flex");
        }
        else {
            $(".header-nav").removeClass('sticky');
            $(".scroll-logo").css("display", "none");
            $(".scroll-social").css("display", "none");
        }
    });
});


$(document).ready(function(){
    $(".news-box").each(function () {
        var text=$(this).find(".news-content p").text();
        var maxChar=120;
        var sentences=[];
        if(text.length>maxChar){
            var words=text.split(' ');
            console.log(words);
            var sum=0;
            for(var i=0; i<words.length; i++){
                sum+=words[i].length;
                if(sum>maxChar){
                    break;
                }
                sentences.push(words[i]);
            }
            $(this).find(".news-content p").text(sentences.join(' ') + '...');
        }
    });
});

(function ($) {
    $(document).ready(function() {
        $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
        $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
        $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
        $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#333', Xoffset: 15});
        $('.xzoom5, .xzoom-gallery5').xzoom({tint: 'rgba(247,134,54,0.76)', Xoffset: 15});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });

            $('.xzoom, .xzoom2, .xzoom3').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;

                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    };

                    xzoom.eventleave = function(element) {
                        element.hammer().on('tap', function(event) {
                            xzoom.closezoom();
                        });
                    };
                    xzoom.openzoom(event);
                });
            });

            $('.xzoom4').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;

                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    };

                    var counter = 0;
                    xzoom.eventclick = function(element) {
                        element.hammer().on('tap', function() {
                            counter++;
                            if (counter == 1) setTimeout(openfancy,300);
                            event.gesture.preventDefault();
                        });
                    };

                    function openfancy() {
                        if (counter == 2) {
                            xzoom.closezoom();
                            $.fancybox.open(xzoom.gallery().cgallery);
                        } else {
                            xzoom.closezoom();
                        }
                        counter = 0;
                    }
                    xzoom.openzoom(event);
                });
            });
        } else {
            //If not touch device

            //Integration with fancybox plugin
            $('#xzoom-fancy').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
                event.preventDefault();
            });
        }
    });
})(jQuery);



$(document).ready(function(){
    function getHashFilter() {
        var hash = location.hash;
        // get filter=filterName
        var matches = location.hash.match( /filter=([^&]+)/i );
        var hashFilter = matches && matches[1];
        return hashFilter && decodeURIComponent( hashFilter );
      }
      
      $( function() {
      
        var $grid = $('.grid');
      
        // bind filter button click
        var $filters = $('.portfolio-menu').on( 'click', 'li', function() {
          var filterAttr = $( this ).attr('data-filter');
          // set filter in hash
          location.hash = 'filter=' + encodeURIComponent( filterAttr );
        });
      
        var isIsotopeInit = false;
      
        function onHashchange() {
          var hashFilter = getHashFilter();
          if ( !hashFilter && isIsotopeInit ) {
            return;
          }
          isIsotopeInit = true;
          // filter isotope
          $grid.isotope({
            itemSelector: '.item',
            filter: hashFilter
          });
          // set selected class on button
          if ( hashFilter ) {
            $filters.find('.active').removeClass('active');
            $filters.find('[data-filter="' + hashFilter + '"]').addClass('active');
          }
        }
      
        $(window).on('hashchange', onHashchange );
        // trigger event handler to init Isotope
        onHashchange();
      });

/*     $('.grid').imagesLoaded(function() {

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.item',
            }
        });

        // filter items on button click
        $('.portfolio-menu').on('click', "li", function() {
            $(".portfolio-menu li").removeClass("active");
            $(this).addClass("active");

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });

        });

   });  */
});