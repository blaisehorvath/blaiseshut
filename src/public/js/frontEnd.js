console.log("Frontend entry script is running");

const $window = $(window);

const inRange = (min, max, val) =>  val > min && val < max;

const bsRanges = {
    mobile : inRange.bind({}, 0, 767),
    sm : inRange.bind({}, 768, 991),
    md : inRange.bind({}, 992, 1199),
    lg : inRange.bind({}, 1200, 1499),
    wide : val => val >= 1500
};

const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const dispatchBootstrapBreakpoint = debounce(()=>{
    let displayWidth = $window.width();
    if ( bsRanges.mobile(displayWidth)) return console.log("mobile");
    if ( bsRanges.sm(displayWidth)) return console.log("sm");
    if ( bsRanges.md(displayWidth)) return console.log("md");
    if ( bsRanges.lg(displayWidth)) return console.log("lg");
    if ( bsRanges.wide(displayWidth)) return console.log("wide");
    window.dispatch({type: "SET_BOOTSTRAP_BREAKPOINT"})
},250);

/*This self invoking function runs the purely front-end scripts*/
(function ($) {

    const navHeight = 150; //the height of the navigation bar

    // This starts the scrollspy
    $('body').scrollspy({target: ".navbar", offset: navHeight});

    // This handles the mobile menu
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // locking the tags to 100px from the top
    // $('.blogTags').affix({offset: {top:50}});

    //getting Bootstrap breakpoints
    $window.resize(dispatchBootstrapBreakpoint);

})(jQuery); // End of use strict