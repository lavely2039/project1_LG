$('.slide-next').click(function(){
    if (photo < 3) {
         $('.slide-container').css({ transform: `translateX(-${ photo }00vw)` });
         photo += 1;
    } else {
      $('.slide-container').css({ transform: `translateX(0)` });
      photo = 1;
    } 
 });
 $('.slide-prev').click(function(){
     if (photo > 1) {
        $('.slide-container').css({ transform: `translateX(-$ { photo - 2 }00vw)` });
        photo -= 1;
     } else {
        $('.slide-container').css({ transform: `translateX(-200vw)` });
        photo = 3;
     }
 });