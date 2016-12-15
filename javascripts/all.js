
// ----- Title animation fade in ----
$('#port').animate({'opacity':'1'}, 1100, function() {
  $('#folio').animate({'opacity':'1'}, 1100)
});
var navHeight = $('.nav-bar').height();

// ----- Navbar scroll logic ------
function scrollLogic() {

  $(".nav-bar").click('a', function (event){

    if (event.target.tagName === 'A') {
      var navItemID = event.target.id
      // removing '-nav' from ID and adding '-section' to scroll to appropriate section
      var section = navItemID.split('-')[0] + '-section'
      var scrollTo = $('#' + section).offset();
      if ($(window).width() > 800) {
        $('html, body').animate({
          scrollTop: scrollTo.top
        }, 500);
      } else {
        $('html, body').animate({
          scrollTop: scrollTo.top-navHeight
        }, 500);
      }
    }
  })

};

scrollLogic();
// Run scrollLogic on window resize to check current width
$( window ).resize(function() {
  $('.nav-bar').off();
  scrollLogic();
});



// navBar outside of scroll to find navbar location
var navBar = $(".nav-bar").offset().top;

// ---- On scroll event listiner -----
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var aboutSect = $("#about-section").offset().top - navHeight;
  var projectsSect = $("#projects-section").offset().top - navHeight;
  var contactSect = $("#contact-section").offset().top - navHeight;

  // ---- Make navbar fixed on scroll
  if ( scrollTop > navBar ) {
    $('.nav-bar').addClass('nav-fixed')
  } else {
    $('.nav-bar').removeClass('nav-fixed')
  }

  // ---- Highlight about nav elements ----
  if (scrollTop > aboutSect && scrollTop < projectsSect) {
    $('#about-nav').addClass('nav-enabled')
  } else {
    $('#about-nav').removeClass('nav-enabled')
  }
  if (scrollTop > projectsSect && scrollTop < contactSect-navHeight) {
    $('#projects-nav').addClass('nav-enabled')
  } else {
    $('#projects-nav').removeClass('nav-enabled')
  }
  if (scrollTop >= contactSect-navHeight) {
    $('#contact-nav').addClass('nav-enabled')
  } else {
    $('#contact-nav').removeClass('nav-enabled')
  }

  // ---- Fade-in element with scroll ----
  if (scrollTop > aboutSect-100) {
    $('#about-section').animate({'opacity':'1'},500);
  }
  if (scrollTop > projectsSect-100) {
    $('#projects-section').animate({'opacity':'1'},500);
  }
  if (scrollTop > contactSect-100) {
    $('#contact-section').animate({'opacity':'1'},500);

  }


});
