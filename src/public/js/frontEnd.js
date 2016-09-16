console.log("Frontend entry script is running");

// Constants
const $window = $(window);

/**
 * @function A function that returns true if the given value is in the range of the given min and max values.
 * @param min {number} The lower border of the range.
 * @param max {number} The higher border of the range.
 * @param val {number} The value that should be checked.
 * @returns {bool}
 */
const inRange = (min, max, val) => val > min && val < max;

/**
 * A function that informs the store about the given breakPoint
 * @param breakPoint {string} The Bootstrap display width type name and an additional <i>mobile</i> or <i>wide</i>.
 */
const dispatchDisplaySize = (breakPoint) => {
    window.dispatch({
        type: "SET_DISPLAY_WIDTH",
        displayWidth: breakPoint
    })
};

/**
 * A constant that holds the functions that check if the given value is in a certain range.
 * The checked ranges are based on the Bootstrap breakpoint values and the pages mobile and wide values.
 * @const
 * @type {Object}
 */
const bsRanges = {
    mobile: inRange.bind({}, 0, 767),
    sm: inRange.bind({}, 768, 991),
    md: inRange.bind({}, 992, 1199),
    lg: inRange.bind({}, 1200, 1499),
    wide: val => val >= 1500
};

/**
 * A function that{Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for N milliseconds.
 * If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.
 * @param func {Function} The function that will be transformed.
 * @param wait {number} The time that is required between multiple function calls.
 * @param immediate
 * @returns {Function} The transformed function that can only be called in N ms periods.
 */
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

/**
 * A function that measures the display size and tests if it's in any of the ranges.
 * When the correct range is found the store is informed.
 * @function
 */
const dispatchBootstrapBreakpoint = () => {
    let displayWidth = $window.width();
    if (bsRanges.mobile(displayWidth)) return dispatchDisplaySize("mobile");
    if (bsRanges.sm(displayWidth)) return dispatchDisplaySize("sm");
    if (bsRanges.md(displayWidth)) return dispatchDisplaySize("md");
    if (bsRanges.lg(displayWidth)) return dispatchDisplaySize("lg");
    if (bsRanges.wide(displayWidth)) return dispatchDisplaySize("wide");
};

/**
 * The function that is the result of calling debounce on dispatchBootstrapBreakpoint function.
 * @function
 */
const dispatchBootstrapBreakpointDebounce = debounce(dispatchBootstrapBreakpoint, 250);

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

    // getting Bootstrap breakpoints
    $window.resize(dispatchBootstrapBreakpointDebounce);

    // set display width in the store when the DOM is ready
    $window.ready(dispatchBootstrapBreakpoint);

})(jQuery); // End of use strict