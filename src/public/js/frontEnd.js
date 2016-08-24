console.log("Frontend entry script is running");

const navHeight = 150; //the height of the navigation bar

/*This self invoking function runs the purely front-end scripts*/
(function ($) {

    // collecting the DOM elements with jQuery that will be the menu that changes accordingly to the scrollspy events
    //TODO: implement this with function composition for better performance
    //TODO: remove commented code on finalization
    let ids = ['aboutUs', 'projects', 'team', 'contactUs'];
    let $ids = ids.map((id) => {
        return {$id: $(`#${id}`), id: id}
    });
    let $places = $ids.map(($id) => {
        return {
            id: $id.id,
            top: $id.$id.offset().top,
            bottom: $id.$id.offset().top + $id.$id.outerHeight(true) - navHeight,
            $id: $id.$id
        }
    });
    /*  let $places2 = $places.reduce((result, item)=> {
        result[item.top] = `#${item.id}`;
        return result
    }, {});*/

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });


    $(window).scroll(function () {

        //scrollspy for the main page
        if (window.getState().isMainPage == true) {

            let $window = $(window);
            let $document = $(document);
            let currentScrollPos = $window.scrollTop(); //$window.height();

            /*  console.log({
             scrollPos: $window.scrollTop(),
             documentHeight: $document.height(),
             places: $places,
             places2: $places2
             });*/

            // if the current position is the bottom of the window highlight the first navbar item
            if (currentScrollPos >= 0 && currentScrollPos <= navHeight && window.getState().activeMenuButton != "aboutUs") {
                window.dispatcher({
                    type: "SET_ACTIVE_MENU_BUTTON",
                    location: ids[0]
                });
                // console.log("Scroll is at TOP");
            }
            // if the current position is the bottom of the window highlight the last navbar item
            else if (currentScrollPos + $(window).height() >= $(document).height()) {
                window.dispatcher({
                    type: "SET_ACTIVE_MENU_BUTTON",
                    location: ids[ids.length - 1]
                });
                // console.log("Scroll is at bottom!");
            }
            // if it's not the top or the bottom search linearly from the top which navbar menu should be active
            else {
                for (let $item of $places) {
                    if (currentScrollPos < $item.bottom && currentScrollPos + navHeight > $item.top) {
                        if ($item.id == window.getState().activeMenuButton) break;
                        if (window.dispatcher) {
                            window.dispatcher({
                                type: "SET_ACTIVE_MENU_BUTTON",
                                location: $item.id
                            })
                        }
                        // console.log(`Scroll is at ${$item.id}`);
                        break
                    }
                }
            }
        }
    });

})(jQuery); // End of use strict