var w = window.innerWidth;
var h = window.innerHeight;

var about = 250;
var services = 750;


$(".nav-wrapper ul li").hover(function () {
        $(this).addClass("liHover");        
    }, function () {
        var sc = $(window).scrollTop();
        $(this).removeClass("liHover");

        if(sc < services && sc > about){
            $(".nav-wrapper ul #sv").removeClass("liHover");
        }
        else if(sc > about){
            $(".nav-wrapper ul #sv").addClass("liHover");     
        }  
        if(sc < about){
            $(".nav-wrapper ul #who").removeClass("liHover");
        }else if( sc > about && sc < services ){
            $(".nav-wrapper ul #who").addClass("liHover");     
        }        
    }
);
$(".nav-wrapper ul li a").hover(function () {
    $(this).addClass("itemHover");      
}, function () {
    var sc = $(window).scrollTop();
    $(this).removeClass("itemHover");

    if(sc < services && sc > about){
        $(".nav-wrapper ul #sv a").removeClass("itemHover");
    }else if(sc > about){
        $(".nav-wrapper ul #sv a").addClass("itemHover");
    }  

    if(sc < about){
    $(".nav-wrapper ul #who a").removeClass("itemHover");
    }  else if( sc > about && sc < services ){
    $(".nav-wrapper ul #who a").addClass("itemHover");
    }  
}
);


$(window).scroll(function (){
    var sc = $(window).scrollTop();
    var s = sc*0.25;
    $("#services").css("background-position", "0 -"+(s - 50)+'px');

    if(sc > services){
        $(".nav-wrapper ul #sv").addClass("liHover");  
        $(".nav-wrapper ul #sv a").addClass("itemHover")
      }else{
          $(".nav-wrapper ul #sv").removeClass("liHover");
        $(".nav-wrapper ul #sv a").removeClass("itemHover");
    }

    if(sc > about && sc < services){
      $(".nav-wrapper ul #who").addClass("liHover");  
      $(".nav-wrapper ul #who a").addClass("itemHover")
    }else{
        $(".nav-wrapper ul #who").removeClass("liHover");
      $(".nav-wrapper ul #who a").removeClass("itemHover");
    }
})
$(".nav-wrapper ul #who").click(function(){
    var sc = $(window).scrollTop();
    if(sc < (about - 10)){
        $("body, html").animate({scrollTop: about+2});
    }
})
$(".nav-wrapper ul #sv").click(function(){
    var sc = $(window).scrollTop();
    if(sc < (services - 10)){
        $("body, html").animate({scrollTop: services+2});
    }
})


$(".fixed-action-btn").click(function(){
    $("body, html").animate({scrollTop: 0});
})