$(document).ready(function() {

    function circleShow() {
        // jQuery Function Number 3
        $("#top").fadeIn(1000);
        setTimeout(introClean, 320);

        //setTimeout(circleOut, 50);
    }

    function circleOut() {
        // jQuery Function Number 1
        // jQuery Function Number 2
        $("#container").removeClass("closed").addClass("opened");
        //setTimeout(introClean, 900)
    }

    function introClean2() {
        $("#intro").hide();
    }

    function introClean() {
        // jQuery Function Number 4
        // jQuery Function Number 5
        $("#container").css("transition-duration", "0s");
        $("#top").removeClass("container-container");
        $("#container").removeClass("opened").addClass("full");
        $("#container").css("overflow", "initial");
        setTimeout(introClean2, 680);
        setTimeout(openNav, 0);
    }

    function switchZIndex() {
        if ($("#black-page").css("z-index") == 0) {
            $("#black-page").css("z-index", 1);
            $("#main-page").css("z-index", 0);
        } else {
            $("#black-page").css("z-index", 0);
            $("#main-page").css("z-index", 1);
        }
    }

    var myVar;
    var myVar2;
    function hideNavBar() {
        $("#nav-bar").hide();
    }

    function myStopFunction() {
        clearTimeout(myVar);
        clearTimeout(myVar2);
    }

    function closeNav() {
        $("#nav-container").css("box-shadow", "");
        $("#burger").addClass("burger-inactive").removeClass("burger-active");
        $("#nav-container").addClass("nav-closed").removeClass("nav-opened");
        $("#nav-bar").addClass("nav-bar-closed").removeClass("nav-bar-opened");
        //myVar = setTimeout(hideNavBar, 600);
        myStopFunction();
    }

    function openNav() {
        $("#nav-bar").show();
        $("#burger").addClass("burger-active").removeClass("burger-inactive");
        $("#nav-container").addClass("nav-opened").removeClass("nav-closed");
        myVar = setTimeout(openBar,250);
        myVar2 = setTimeout(openShadow,750);
    }

    function openBar() {
      $("#nav-bar").addClass("nav-bar-opened").removeClass("nav-bar-closed");
    }

    function openShadow() {
      $("#nav-container").css("box-shadow", "inset 1px -1px 4px rgba(0, 0, 0, 0.2)");
    }

    $("#nav-bar").hide();
    $("#top").hide();
    setTimeout(circleShow, 800);


    $("#bars").click(function() {
        // jQuery Function Number 6
        if ($("#burger").hasClass("burger-active")) {
            closeNav();
        } else {
            openNav();
        }
    })

    $(".selected").click(function() {
        if ($("#burger").hasClass("burger-active")) {
            closeNav();
        }
    })

    $("#about-page").click(function() {
        console.log($(this).attr("id"));
        if ($("#burger").hasClass("burger-active")) {
            closeNav();
        }
    })

    $("#projects-page").click(function() {
        console.log($(this).attr("id"));
        if ($("#burger").hasClass("burger-active")) {
            closeNav();
        }
    })

    $("#resume-page").click(function() {
        console.log($(this).attr("id"));
        if ($("#burger").hasClass("burger-active")) {
            closeNav();
        }
    })

    $(".hoaian").click(function() {
        setTimeout(openNav, 0);
    })

    $(".nav-element-extra").hover(function(){
        var id = "#" + $(this).attr("id") + "-display";
        var select = $(id);
        $(select).css("transform", "translateX(16px)");
        $(select.children()[0]).css("left", "0px");
        $(select.children()[0]).css("width", "100%");
        $(this).css("transform", "translateX(16px)");
        $(this.children[0]).css("left", "0px");
        $(this.children[0]).css("width", "100%");
    }, function(){
        var id = "#" + $(this).attr("id") + "-display";
        var select = $(id);
        $(select.children()[0]).css("left", "initial");
        $(select.children()[0]).css("right", "0px");
        $(select.children()[0]).css("width", "0%");
        $(select).css("transform", "translateX(0)");
        $(this.children[0]).css("left", "initial");
        $(this.children[0]).css("right", "0px");
        $(this.children[0]).css("width", "0%");
        $(this).css("transform", "translateX(0)");
    });

    $(".nav-element").hover(function(){
        $(this).css("transform", "translateX(16px)");
        //$(this.children[0]).css("left", "0px");
        $(this.children[0]).css("width", "100%");
    }, function(){
        $(this.children[0]).css("left", "initial");
        //$(this.children[0]).css("right", "0px");
        $(this.children[0]).css("width", "0%");
        $(this).css("transform", "translateX(0)");
    });

    $(".card").hover(function(){
        $(this.children[1]).css("transform", "translateX(0)");
        //$(this.children[0]).css("left", "0px");
        $(this.children[1].children[0]).css("width", "100%");
        $(this.children[1].children[0]).css("left", "0px");
        $(this.children[1].children[0]).css("opacity", "0.5");
    }, function(){
        $(this.children[1].children[0]).css("left", "0px");
        //$(this.children[0]).css("right", "0px");
        $(this.children[1].children[0]).css("width", "100%");
        $(this.children[1].children[0]).css("opacity", "0");
        $(this.children[1]).css("transform", "translateX(0)");
    });


    $(".social").hover(function(){
        $(this.children[0]).css("opacity", "1");
    }, function(){
        $(this.children[0]).css("opacity", "0");
    });



    $(".nav-element").click(function(){
        var thisID = $(this).attr("id");
        console.log(thisID);
        if ($(this).attr("id") != "resume") {
        $(".selected").addClass("unselected").removeClass("selected");
        var pageId = "#" + $(this).attr("id") + "-page";
        $(pageId).removeClass("unselected").addClass("selected");
        closeNav();
        }
    })

    $(".coming-soon").click(function(){
        alert("Coming soon!");
    })

});
