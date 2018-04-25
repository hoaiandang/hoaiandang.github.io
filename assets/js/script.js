$(document).ready(function() {
    
    function circleOut() {
        // jQuery Function Number 1
        // jQuery Function Number 2
        $("#container").removeClass("closed").addClass("opened");
        setTimeout(introClean, 900)
    }
    
    function circleShow() {
        // jQuery Function Number 3
        $("#top").fadeIn(50);
        
        setTimeout(circleOut, 50);
    }
    
    
    function introClean() {
        // jQuery Function Number 4
        $("#intro").hide();
        // jQuery Function Number 5
        $("#container").css("transition-duration", "0s");
        
        $("#top").removeClass("container-container");
        $("#container").removeClass("opened").addClass("full");
        $("#container").css("overflow", "initial");
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
    
    function closeNav() {
        $("#burger").addClass("burger-inactive").removeClass("burger-active");
        $("#nav-container").addClass("nav-closed").removeClass("nav-opened");
        //$("#nav-bar").hide();
        $("#nav-bar").animate({
            opacity: 0.9999999
        }, 800, "linear", function() {
                        $(this).hide();
        })
        //$("#nav-container-extra").addClass("nav-closed-extra").removeClass("nav-opened-extra");
    }
    
    function openNav() {
        $("#nav-bar").show();
        $("#burger").addClass("burger-active").removeClass("burger-inactive");
        $("#nav-container").addClass("nav-opened").removeClass("nav-closed");
        //$("#nav-container-extra").addClass("nav-opened-extra").removeClass("nav-closed-extra");
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
        console.log($(this).attr("id"));
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
        $(this.children[0]).css("left", "0px");
        $(this.children[0]).css("width", "100%");
    }, function(){
        $(this.children[0]).css("left", "initial");
        $(this.children[0]).css("right", "0px");
        $(this.children[0]).css("width", "0%");
        $(this).css("transform", "translateX(0)");
    });
    
    
    $(".social").hover(function(){
        $(this.children[0]).css("left", "8px");
        $(this.children[0]).css("width", "63%");
    }, function(){
        $(this.children[0]).css("left", "initial");
        $(this.children[0]).css("right", "8px");
        $(this.children[0]).css("width", "0%");
    });
    
    
    
    $(".nav-element").click(function(){
        $(".selected").addClass("unselected").removeClass("selected");
        var pageId = "#" + $(this).attr("id") + "-page";
        $(pageId).removeClass("unselected").addClass("selected");
        closeNav();
    })
    
    
});
