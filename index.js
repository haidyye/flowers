
let aboutsection =  $("#about").offset().top  
$(window).scroll(function(){
    let scrollNw = $(window).scrollTop()
    if(scrollNw > aboutsection ){
        $("#mynav").css("backgroundColor" , "rgb(213, 183, 216 ,0.7)")
        $("#mynav").css("padding" , "3px")
        }
    else{
      $("#mynav").css("backgroundColor" , " rgb(245, 193, 250)")
      $("#mynav").css("padding" , "0px")
    }
})

let deliver = $("#deliver").offset().top
console.log(deliver)
$(window).scroll(function(){
    let scrollNw = $(window).scrollTop()
    if(scrollNw > deliver){
        $(".col-md-4").show(1000 )
    }
})

