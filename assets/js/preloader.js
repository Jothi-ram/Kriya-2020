$('.loader').each(function(){
    $(this).css('top',(window.innerHeight/2)-($('.c2').height()/2)-20);
    $(this).css('left',(window.innerWidth/2)-($('.c2').width()/2)-20);
})
$('body').imagesLoaded(function(){
    
})