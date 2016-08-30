console.log("Frontend entry script is running");


/*This self invoking function runs the purely front-end scripts*/
(function ($) {

    const navHeight = 150; //the height of the navigation bar

    // This starts the scrollspy
    $('body').scrollspy({target: ".navbar", offset: navHeight});

    // This handles the mobile menu
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

})(jQuery); // End of use strict