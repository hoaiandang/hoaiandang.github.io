$(document).ready(function() {
    
    function circleShow() {
        // jQuery Function Number 3
        $("#top").fadeIn(50);
        
        setTimeout(circleOut, 50);
    }
    
    function circleOut() {
        // jQuery Function Number 1
        // jQuery Function Number 2
        $("#container").removeClass("closed").addClass("opened");
        setTimeout(introClean, 900)
    }    
    
    function introClean() {
        // jQuery Function Number 4
        $("#intro").hide();
        // jQuery Function Number 5
        $("#container").css("transition-duration", "0s");
        
        $("#top").removeClass("container-container");
        $("#container").removeClass("opened").addClass("full");
        $("#container").css("overflow", "initial");
        
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
    
    
    
    function hideNavBar() {
        $("#nav-bar").hide();
    }
    
    function myStopFunction() {
        clearTimeout(myVar);
    }
    
    function closeNav() {
        $("#burger").addClass("burger-inactive").removeClass("burger-active");
        $("#nav-container").addClass("nav-closed").removeClass("nav-opened");
        //$("#nav-bar").hide();
        
        /*
        $("#nav-bar").animate({
            opacity: 0.9999999
        }, 600, "linear", function() {
            $(this).hide();
        })
        */
        
        myVar = setTimeout(hideNavBar, 600);
        
        //$("#nav-container-extra").addClass("nav-closed-extra").removeClass("nav-opened-extra");
    }
    
    function openNav() {
        $("#nav-bar").show();
        $("#burger").addClass("burger-active").removeClass("burger-inactive");
        $("#nav-container").addClass("nav-opened").removeClass("nav-closed");
        //$("#nav-container-extra").addClass("nav-opened-extra").removeClass("nav-closed-extra");
        myStopFunction();
    }
    
    function playMessages() {
        console.log("1");
        setTimeout(playMessage1, 1000)
    }
    
    function playMessage1() {
        console.log("2");
        $("#message-1").css("opacity", ".8");
        setTimeout(fadeMessage1, 3200);
    }
    
    function fadeMessage1() {
        console.log("3");
        $("#message-1").css("opacity", "0");
        setTimeout(playMessage2, 1600);
    }
    
    function playMessage2() {
        console.log("4");
        $("#message-2").css("opacity", "0.8");
        setTimeout(fadeMessage2, 4800);
    }
    
    function fadeMessage2() {
        console.log("5");
        $("#message-2").css("opacity", "0");
        setTimeout(playMessage3, 1600);
    }
    
    function playMessage3() {
        console.log("6");
        $("#message-3").css("opacity", "0.8");
        setTimeout(fadeMessage3, 4800);
    }
    
    function fadeMessage3() {
        console.log("7");
        $("#message-3").css("opacity", "0");
        setTimeout(playMessage4, 1600);
    }
    
    function playMessage4() {
        console.log("8");
        $("#message-4").css("opacity", "0.8");
        setTimeout(fadeMessage4, 4200);
    }
    
    function fadeMessage4() {
        console.log("9");
        $("#message-4").css("opacity", "0");
    }

    
    
    
    console.log($(".message").attr("message") + $(".message").attr("message"));
    console.log($(".message").html());
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
        if ($("#black-page").hasClass("closed")) {
            $("#black-page").removeClass("closed").addClass("opened");
            $("#particles-js").css("opacity", "1");
        } else {
            $("#black-page").removeClass("opened").addClass("closed");
            $("#particles-js").css("opacity", "0");
        }
        if ($(this).attr("message") == "true") {
            playMessages();
            $(this).attr("message", "false");
            console.log("if statement");
        }
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
    
    $(".card").click(function(){
        alert("Coming soon!");
    })
    
    
});
