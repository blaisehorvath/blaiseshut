console.log("Frontend entry script is running");

// Constants
const $window = $(window);
const $document = $(document);
const scrollSpyLocations = ['aboutUs', 'projects', 'team', 'contactUs'];
const navHeight = 150; //the height of the navigation bar

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
 * A function that returns a function, that, as long as it continues to be invoked, will not
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
const getLastPlace = ($places, maxTop)=> {
    return $places.reduce((prev, curr)=> {
        if (curr.top > maxTop) return prev;
        else if (curr.top > prev.top)return curr;
        else return prev;
    }, {id: undefined, top: -1, bottom: undefined})
};
const getCurrentHeader = (headers, maxTop)=> {
    return headers.reduce((prev, curr)=> {
        if (curr.top > prev.top) return curr;
        else if (curr.top > prev.top) return curr;
        else return prev;
    }, {html: undefined, top: -1, title: undefined});
}
//TODO: doc
const scrollSpy = () => {
    if (window.getState().activePage === "about") {

        let $places = scrollSpyLocations.map(
            id => ({
                id: id,
                $id: $(`#${id}`)
            }))
            .map($node => ({
                id: $node.id,
                top: $node.$id.offset().top,
                bottom: $node.$id.offset().top + $node.$id.outerHeight(true) - navHeight
            }))
            .sort((a, b)=> {
                if (a.top === b.top) return 0;
                return (a.top < b.top) ? -1 : 1;
            });

        let currentScrollPos = $window.scrollTop();
        let docHeight = $document.height();
        let viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        /*
         console.log({
         current: currentScrollPos,
         windowHeight: viewHeight,
         documentHeight: docHeight,
         topRange: $places[0].top + "-" + $places[0].bottom,
         projectsRange: $places[1].top + "-" + $places[1].bottom,
         teamRange: $places[2].top + "-" + $places[2].bottom,
         contactUsRange: $places[3].top + "-" + $places[3].bottom
         });*/

        // if the current position is the bottom of the window highlight the first navbar item
        if (currentScrollPos >= 0 && currentScrollPos <= navHeight) {
            window.dispatch({
                type: "SET_ACTIVE_MENU_BUTTON",
                location: scrollSpyLocations[0]
            });
            // console.log("Scroll is at TOP");
        }
        // if the current position is the bottom of the window highlight the last navbar item
        else if (currentScrollPos + viewHeight >= docHeight - 1) {
            window.dispatch({
                type: "SET_ACTIVE_MENU_BUTTON",
                location: scrollSpyLocations[scrollSpyLocations.length - 1]
            });
            // console.log("Scroll is at bottom!");
        }
        // if it's not the top or the bottom search linearly from the top which navbar menu should be active
        else {
            let $item = getLastPlace($places, currentScrollPos + navHeight);
            if (window.dispatch && !($item.id == window.getState().activeMenuButton)) {
                window.dispatch({
                    type: "SET_ACTIVE_MENU_BUTTON",
                    location: $item.id
                })
            }
            // console.log(`Scroll is at ${$item.id}`);

        }
    }
    else if (window.getState().activePage === "blog") {
        //TODO: This isn't called if there is no scroll.
        //TODO: It should be, viewHeight and docHeight is enough to fire bottom event in that case
        //TODO: Call scrollSpyDebounce every ~200ms
        let docHeight = $document.height();
        let viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let currentScrollPos = $window.scrollTop();
        if (currentScrollPos + viewHeight + 2 >= docHeight) {
            if (window.getState().isBottom === 'NOT_BOTTOM')
                window.dispatch({type: 'TO_BOTTOM'});
        } else if (window.getState().isBottom === 'ON_BOTTOM') {
            window.dispatch({type: 'NOT_BOTTOM'});
        }
    }
    else if (window.getState().activePage === "blogPost") {
        let currentScrollPos = $window.scrollTop();
        let header = getCurrentHeader(window.getState().postHeaders, currentScrollPos + navHeight);
        if (window.dispatch && !(header == window.getState().currentHeader)) {
            window.dispatch({type: 'NEW_CURRENT_HEADER', header})
        }
    }
};

const getNewBlogPosts = (numberOfPostsToReturn, posts, activeTags, onAjaxFinish)=> {
    let data = {
        currentBlogPostIds: posts.map(post=>post.id),
        numberOfPostsToReturn,
        activeTags: activeTags
    };
    $.ajax({
        type: 'POST',
        url: '/getBlogPosts',
        data,
    }).done((data)=> {
        onAjaxFinish(data);// Comes from the connect..
    })
};
let onAjaxFinish = (posts)=> {
    window.dispatch({
        type: 'NEW_BLOG_POSTS',
        posts
    });
    window.dispatch({
        type: 'NOT_LOADING_POSTS',
        posts
    });
};
window.subscribe(()=> {
    if (window.getState().isBottom === "TO_BOTTOM") {
        window.dispatch({type: 'ON_BOTTOM'});
        window.dispatch({type: 'LOADING_POSTS'});
        getNewBlogPosts(1, window.getState().BlogPosts, window.getState().ActiveTags, onAjaxFinish);
    }
});
const scrollSpyDebounce = debounce(scrollSpy, 10);
//scrollSpy();//TODO...
setInterval(scrollSpy, 200); //TODO: Not reaload on blogPost etc....
/*This self invoking function runs the purely front-end scripts*/
(function ($) {

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

    $window.scroll(()=> {
        scrollSpyDebounce();
    })

})(jQuery); // End of use strict