currentSlide = 1;
nextSlide = 2;

$(document).ready(function(){
  $(".slider>img#1").fadeIn(300);
    startSlider();
});

function startSlider(){
    count = $(".slider > img").size();
    
    loop = setInterval(function(){

      if(nextSlide > count){
        nextSlide = 1;
        currentSlide = 1;
      }
    
      $(".slider > img").fadeOut(300);
      $(".slider > img#" + nextSlide).fadeIn(300);
      
      currentSlide = nextSlide;
      nextSlide = nextSlide + 1;

    },3000)
}

function previous(){
  newSlide = currentSlide - 1;
  showSlide(newSlide);
}

function next(){
  newSlide = currentSlide + 1;
  showSlide(newSlide);
}

function stopLoop(){
  window.clearInterval(loop);
}

function showSlide(id){
  stopLoop();
  if(id > count){
    id = 1;
  }else if(id < 1){
    id = count;
  }
  
  $(".slider > img").fadeOut(300);
  $(".slider > img#" + id).fadeIn(300);
  
  currentSlide = id;
  nextSlide = id + 1;
  startSlider();
}

$(".slider > img").hover(
  function(){stopLoop();},
  function(){startSlider();}
);