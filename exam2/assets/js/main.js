(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // Mobile Menu

    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("active");
    });

    $(".navbar-nav li a").on("click", function () {
      $(".sub-nav-toggler").removeClass("active");
    });

    var subMenu = $(".navbar-nav .sub-menu");

    if (subMenu.length) {
      subMenu
        .parent("li")
        .children("a")
        .append(function () {
          return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

      var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

      subMenuToggler.on("click", function () {
        $(this).parent().parent().children(".sub-menu").slideToggle();
        return false;
      });
    }

    //jQuery Sticky Area
    $(".sticky-area").sticky({
      topSpacing: 0,
    });

    //Counter Up

    $(".counter-number span").counterUp({
      delay: 10,
      time: 1000,
    });

    //Filter

    $(".port-menu li").on("click", function () {
      var selector = $(this).attr("data-filter");

      $(".port-menu li").removeClass("active");

      $(this).addClass("active");

      $(".portfolio-list").isotope({
        filter: selector,
        percentPosition: true,
      });
    });


    
	//Magnific Pop-up

	$('.video-play-btn').magnificPopup({
		type: 'iframe'

	});

    //Client Testimonial Carousel
    if (
      $(".client-testimonial-carousel").length &&
      $(".client-thumbs-carousel").length
    ) {
      var $sync3 = $(".client-testimonial-carousel"),
        $sync4 = $(".client-thumbs-carousel"),
        flag = false,
        duration = 500;

      $sync3
        .owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          nav: true,
          navText: [
            '<span class="fa fa-angle-left"></span>',
            '<span class="fa fa-angle-right"></span>',
          ],
          dots: true,
          autoplay: false,
          autoplayTimeout: 5000,
        })
        .on("changed.owl.carousel", function (e) {
          if (!flag) {
            flag = false;
            $sync4.trigger("to.owl.carousel", [e.item.index, duration, true]);
            flag = false;
          }
        });

      $sync4
        .owlCarousel({
          loop: true,
          margin: 0,
          items: 1,
          nav: false,
          navText: [
            '<span class="icon fa fa-long-arrow-left"></span>',
            '<span class="icon fa fa-long-arrow-right"></span>',
          ],
          dots: true,
          center: false,
          autoplay: false,
          autoplayTimeout: 5000,
          responsive: {
            0: {
              items: 1,
              autoWidth: false,
            },
            400: {
              items: 1,
              autoWidth: false,
            },
            600: {
              items: 1,
              autoWidth: false,
            },
            1000: {
              items: 1,
              autoWidth: false,
            },
            1200: {
              items: 1,
              autoWidth: false,
            },
          },
        })

        .on("click", ".owl-item", function () {
          $sync3.trigger("to.owl.carousel", [$(this).index(), duration, true]);
        })
        .on("changed.owl.carousel", function (e) {
          if (!flag) {
            flag = true;
            $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
            flag = false;
          }
        });
    }

    //jQuery Animation
    new WOW().init();

    AOS.init({
      duration: 1200,
    });

    // SCROLLTO THE TOP

    // Show or hide the sticky footer button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 6000) {
        $(".go-top").fadeIn(200);
      } else {
        $(".go-top").fadeOut(200);
      }
    });

    // Animate the scroll to top
    $(".go-top").click(function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    // Listing Carousel

    $(".listing-carousel").owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: false,
      autoplay: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        1200: {
          items: 3,
        
        },

        990: {
          items: 2,
          nav: false,
          dots: false,
        },

        767: {
          items: 2,
        },

        575: {
          items: 1,
          nav: false,
          dots: false,
        },
      },
    });
  });

  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#007CFF",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#27A746",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#FFBF0D",
    duration: 5000,
  });

  $("#bar4").barfiller({
    barColor: "#F99092",
    duration: 5000,
  });

  // SCROLLTO THE TOP

  // Show or hide the sticky footer button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 6000) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $(".go-top").click(function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

    // Contact Form

    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
  
      var $action = $(this).prop("action");
      var $data = $(this).serialize();
      var $this = $(this);
  
      $this.prevAll(".alert").remove();
  
      $.post(
        $action,
        $data,
        function (data) {
          if (data.response == "error") {
            $this.before(
              '<div class="alert alert-danger">' + data.message + "</div>"
            );
          }
  
          if (data.response == "success") {
            $this.before(
              '<div class="alert alert-success">' + data.message + "</div>"
            );
            $this.find("input, textarea").val("");
          }
        },
        "json"
      );
    });

  jQuery(window).load(function () {
    jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
  });
})(jQuery);
