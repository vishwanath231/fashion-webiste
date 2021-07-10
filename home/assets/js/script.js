$(document).ready(function () {
    $(window).scroll(function () {
        
        // scroll up button
        if (this.scrollY > 200) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // Scroll up button "smooth scroll"

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    //nav link "smooth"

    $(".navbar .nav-list li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    // click the link atfer auto remove

    $(".nav-btn").click(function () {
        $(".navbar .nav-list").toggleClass("active");
        $(".nav-line > div").toggleClass("active");
    });

    // Typed Animation

    var typed = new Typed(".typing", {
        strings: ["fast", "beautiful"],
        typeSpeed: 120,
        backSpeed: 70,
        loop: true,
    });


    
    (function () {
        if (!!location.hash) return;
        var link = document.querySelector('.tabs > .tabs__link');
        if (link) link.click();
    })();



});



