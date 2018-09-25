var w = window.innerWidth;
var h = window.innerHeight;
var sc = $(window).scrollTop();

var about = 250;
var services = 700;

if(sc > 30){
    $("nav").css("background", "#333");
    $("nav").css("box-shadow", "0 0px 20px rgba(0,0,0,.6)");
}else{
    $("nav").css("background", "transparent");
    $("nav").css("box-shadow", "0 30px 30px rgba(0,0,0,.6) inset");
}

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
$(".nav-wrapper ul #sv a").hover(function () {
        $(this).addClass("itemHover2");
        
    }, function () {
        $(this).removeClass("itemHover2");
    }
);


$(".nav-wrapper ul li a").hover(function () {
    $(this).addClass("itemHover");      
}, function () {
    var sc = $(window).scrollTop();
    $(this).removeClass("itemHover");

  

    if(sc < services && sc > about){
        $(".nav-wrapper ul #sv a").removeClass("itemHover2");
    }else if(sc > about){
        $(".nav-wrapper ul #sv a").addClass("itemHover2");
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
    var s = sc*0.10;
    //$("#services").css("background-position", "0 -"+(s)+'px');
if(sc > 30){
    $("nav").css("background", "#333");
    $("nav").css("box-shadow", "0 0px 20px rgba(0,0,0,.6)");
}else{
    $("nav").css("background", "transparent");
    $("nav").css("box-shadow", "0 30px 30px rgba(0,0,0,.6) inset");
}
    if(sc > services){
        $(".nav-wrapper ul #sv").addClass("liHover");  
        $(".nav-wrapper ul #sv a").addClass("itemHover2");
      }else{
          $(".nav-wrapper ul #sv").removeClass("liHover");
        $(".nav-wrapper ul #sv a").removeClass("itemHover2");
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

//SlideShow
slide(7);
function slide(seconds){
    var count = 0;
    setInterval(() =>{
        count++;
        if(count > 2){
            count = 0;
        }
        $("header > .cont").eq(count).css({"left": -33.33*count+"%", "opacity" : 0});
        $("header > .cont").eq(count-1).css({"left": -33.33*count+"%", "opacity" : 0});
        setTimeout(() =>{
            $("header > .cont").eq(count-1).css("left", 33.33*count+"%");
        }, 1100);
        setTimeout(() => {
            $("header > .cont").eq(count).css("opacity" , 1);
        }, 800);
    },seconds*1000);   
  
}
