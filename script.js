var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $(".navigation").css({ height: "10rem" });
        $(".navigation ul").show();
    } else {
        if (window.matchMedia('(max-width: 600px)').matches) {
            $(".navigation").css({ height: "4rem" });
        } else {
            $(".navigation").css({ height: "6.5rem" });
        }
        $(".navigation ul").hide();
    }
    prevScrollpos = currentScrollPos;
}

$(window).on("load", function () {
    if (window.matchMedia('(max-width: 600px)').matches) {
        $(".landing h1").animate({ fontSize: "2.5em" }, "slow");
        $(".landing h2").animate({ fontSize: "2em" }, "slow");
    } else {
        $(".landing h1").animate({ fontSize: "3em" }, "slow");
        $(".landing h2").animate({ fontSize: "2.5em" }, "slow");
    }
});

var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        if (direction == "down") {
            $(".html").css("animation-play-state", "running");
            $(".css").css("animation-play-state", "running");
            $(".js").css("animation-play-state", "running");
            $(".jquery").css("animation-play-state", "running");
            $(".bootstrap").css("animation-play-state", "running");
            $(".ux").css("animation-play-state", "running");
        }
    }
});

var contactWaypoints = new Waypoint({
    element: document.getElementById('contact-div'),
    handler: function (direction) {
        if (window.matchMedia('(max-width: 600px)').matches) {
            $(".book-quote").hide();
        } else {
            if (direction == "down") {
                $(".book-quote").delay(2000).fadeIn(800);
            }
        }

    }
});
