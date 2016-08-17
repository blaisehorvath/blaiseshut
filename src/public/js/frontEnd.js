console.log("Entry frontend script is running");


(function ($) {

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

    $(window).scroll(function() {
        let team = $("#team");
        let $window = $(window);
        let $document = $(document);
        console.log({
            current : $window.scrollTop() + $window.height(),
            offset : team.offset().top + 50
        });
    });

})(jQuery); // End of use strict
