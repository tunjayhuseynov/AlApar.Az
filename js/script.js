$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    },
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$('.owl-nav').css("display", "none");
$(".owl-dots").css("display", "none")

var slider = document.getElementById("myRange");
var output = document.getElementById("Max");
var output2 = document.getElementById("Min");

output.addEventListener("change", function(){

    output2.setAttribute("max", ""+ output.value +"")
});
slider.addEventListener("change", function(){
    output2.setAttribute("max", ""+ output.value +"")


});

output2.addEventListener('change', function(){
    if(output.value < this.value){
        this.value= output.value;
    }
    else{
        this.value != output.value+1000;
    }
})

slider.oninput = function() {
  output.value = this.value*10000;
}


var slider2 = document.getElementById("myRange2");
var output11 = document.getElementById("MaxPlace");
var output22 = document.getElementById("MinPlace");

output11.addEventListener("change", function(){

    output22.setAttribute("max", ""+ output11.value +"")
});

slider2.addEventListener("change", function(){
    output22.setAttribute("max", ""+ output11.value +"")


});

output22.addEventListener('change', function(){
    if(output11.value < this.value){
        this.value= output11.value;
    }
    else{
        this.value != output11.value+1;
    }
})

slider2.oninput = function() {
  output11.value = this.value;
}
