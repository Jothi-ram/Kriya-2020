$('div[data-category][caption]').each(function(){
    $(this).attr('orbitor','assets/workshops/logo/'+$(this).attr("file")+'.png');
})

//responsive
width=$(window).width();
if(width>1200)
    $('[orbitor]').css('width',width/4);
else if(width>992)
    $('[orbitor]').css('width',width/3);
else if(width>768)
    $('[orbitor]').css('width',width/2);
else
    $('[orbitor]').css('width',width);


$('.filter-selector h4').click(function(){
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
})
$('[orbitor]').each(function(){
    $(this).html('<center><img src="'+$(this).attr('orbitor')+'" class="img-responsive"><div class="orbitor"></div><h3 style="text-transform:uppercase">'+$(this).attr('caption')+'</h3></center>')
    $(this).addClass('filtr-item');
})

$('.grid').imagesLoaded(function(){
    
    $('[orbitor] img').each(function(){
        $(this).css('height','240px');
    })
    $('.grid').filterizr();
    $('.orbitor').each(function(){
        cur=$(this);
        cur.css('width',cur.prev().width());
        cur.css('height',cur.prev().height());
        cur.css('margin-top',-cur.prev().height()+20);
        cur.prev().css('height','200px');
    })
    $('[orbitor]').hover(function(){
        $(this).css('padding-bottom','0px');
        $(this).find('.orbitor').css('opacity','1');
        $(this).find('h3').css('margin-top','20');
        $(this).find('h3').css('transform','scale(1.2)');
        $(this).find('img').css('animation','beat 1s linear infinite');
    },function(){
        $(this).css('padding-bottom','60px');
        $(this).find('.orbitor').css('opacity','0');
        $(this).find('h3').css('margin-top','-40');
        $(this).find('h3').css('transform','scale(1)');
        $(this).find('img').css('animation','none');
    })
    $('[orbitor] img').each(function(){
        $(this).css('padding','35px');
       // $(this).css('filter','hue-rotate(180deg)');
    })
    setTimeout(function(){
        $('.preloader').css('opacity','0');
        $('.loader').css('animation','zoomClose 1.75s');
        setTimeout(function(){
            $('.preloader').css('transition','0.75s');
            $('.preloader').css('transform','scale(0)');
        },1500);
    },500)
})
function openmodal(file)
{
    $('[modalContent]').html('');
    $('[navbutton]').css('transform','scale(0)');
    WprepareModal(file);
    $('[modal]').css('opacity','1');
    $('[modal]').css('transform','scale(1)');
}
/*function openmodal()
{
    $('[modal]').css('opacity','1');
    $('[modal]').css('transform','scale(1)');
}
openmodal();*/
function closemodal()
{
    $('[navbutton]').css('transform','scale(1)');
    $('[modal]').css('opacity','0');
    $('[modal]').css('animation','none');
    $('[modal]').css('transform','scale(0)');
    $('[modalContent]').html('');
}
$('[orbitor]').click(function(){
    openmodal($(this).attr('file'),$(this));
})
$('[modalclose]').click(function(){
    closemodal();
})