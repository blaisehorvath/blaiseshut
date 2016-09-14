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

    // lockng the tags to 100px from the top
    // $('.blogTags').affix({offset: {top:50}});

    // social
    $(window).on("navigate", (event, data)=> {
        console.log("navigate");
        $(".socialButtons").jsSocials({
                shares: ["facebook", "twitter", "linkedin", "googleplus", "email"]
            });
        }
    )

})(jQuery); // End of use strict