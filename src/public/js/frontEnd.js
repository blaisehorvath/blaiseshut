console.log("Frontend entry script is running");


(function ($) {

    let ids = ['aboutUs', 'projects', 'team', 'contactUs'];
    let $ids = ids.map((id) => { return { $id : $(`#${id}`), id : id} });
    let $places = $ids.map( ($id) => {return {id: $id.id, top: $id.$id.offset().top, bottom: $id.$id.offset().top+$id.$id.outerHeight(true)-1, $id: $id.$id}});
    let $places2 = $places.reduce((result, item)=>{ result[item.top]=`#${item.id}`; return result}, {});
    console.log($places);

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

    let activeTag;

    $(window).scroll(function() {
        let team = $("#team");
        let $window = $(window);
        let $document = $(document);
        let current = $window.scrollTop() + $window.height();

        for (let $item of $places) {
            if (current < $item.bottom && current > $item.top) {
                if ($item.id == activeTag) break;
                activeTag = $item.id;
                console.log(`Scroll is at ${$item.id}`);
                break
            }
        }
    });

})(jQuery); // End of use strict