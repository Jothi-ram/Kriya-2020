function tileInit(){
    $('body').append('<style>.tile h1{letter-spacing:3px;font-family:trench;margin:0px;color:white;}.tile [overlay]{transition:0.5s;transform:scaleY(0);opacity:0;text-align:center;position:absolute;top:10px;left:15px;margin:0px;background:rgba(0,0,0,0.7);}.tile img{transition:0.5s}.tile{margin-top:10px;margin-bottom:10px;overflow:hidden;}.tile[redir]:hover{cursor:pointer}.tile:hover img{transform:scale(1.5);}.tile:hover [overlay]{transform:scaleY(1);opacity:1;}</style>');
    $('.tile').each(function(){
        $(this).html('<img src="'+$(this).attr('img')+'" class="img-responsive"><div overlay><h1>'+$(this).attr('caption')+'</h1></div>');
    })
    $('.tile').imagesLoaded(function(){
        $('.tile').each(function(){
            cur=$(this);
            cur.find('[overlay]').css('width',cur.find('img').width());
            cur.find('[overlay]').css('height',cur.find('img').height());
            cur.find('h1').css('margin-top',cur.find('img').height()/2-cur.find('h1').height()/2);
        })
    })
    $('.tile[redir]').click(function(){
        window.location.href=$(this).attr('redir');
    })
}