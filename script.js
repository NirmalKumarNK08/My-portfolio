// alert("Hello, This page is just a demo version");

//Writing code for sticky navigation in highlighted color.
$(document).ready(function() {
  $(document).scroll(function () {
    if(scrollY > 20) {
      $(".navigation").addClass("sticky");
      // $(".navigation .logo > a > span").addClass("color"); //It can change the logo's color while scrolling.
    } else {
      $(".navigation").removeClass("sticky");
      // $(".navigation .logo > a > span").removeClass("color");
    }
    if(scrollY > 500) {
        $(".scroll-up-btn").addClass("visible");
    } else{
        $(".scroll-up-btn").removeClass("visible");
    }
});

$(".scroll-up-btn").click(function(){
    $("html").animate({scrollTop: 0});
});
    // declaring active toggle function
    function toggleFuc() {
        $(".navigation .viewmenu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
        $(".navigation .empty-bg").toggleClass("active");
    };
                        
  // toggle funtion for navbar links
  $(".navigation .viewmenu li a").click(function () {
        toggleFuc();
  });

  // toggle funtion for menubar
  $(".menu-btn").click(function () {
        toggleFuc();
  });

  // toggle funtion for except of navbar-menu
  $(".empty-bg").click(function () {
        toggleFuc();
  });
});

// creating typing animation
var typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 70,
    backSpeed: 80,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Web Developer"],
    typeSpeed: 70,
    backSpeed: 80,
    loop: true
});


