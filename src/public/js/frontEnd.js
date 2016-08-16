console.log("Entry frontend script is running");


(function ($) {

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

})(jQuery); // End of use strict
