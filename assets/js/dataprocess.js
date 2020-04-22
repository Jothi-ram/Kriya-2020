function prepareModal(file)
{
    var itr=0,flag=0,temp="",start=0,sflag=0;
    del=0;
    $.getJSON('assets/events/data/'+file+'.json',function(data){
        $.each(data.root,function(key,val){
            if(val.type=="title")
            {
                temp+='<div titleContainer><center><h1 style="display:inline-block;">'+val.text+'</h1></center>';
                if(data.root[key+1].type=="titleTag")
                    temp+='<h3 style="text-align: center;font-family: ralewayL;">'+data.root[key+1].text+'</h3>';
                else
                    temp+='<style>[titleContainer]{padding-bottom:10px!important}</style>';
                temp+='</div>';
            }

            if(val.type=="subtitle")
            {
                if(start==0)
                {
                    temp+='<div class="panel-group" id="accordion">';
                    start=1;
                }
                if(flag==1)
                {
                    temp+='</div></div></div>';
                    flag=0;
                    sflag=0;
                    itr+=1;    
                }
                if(flag==0)
                {
                        temp+='<div class="panel panel-info" style="animation-delay:'+del+'s">';
                        del+=0.1;
                            temp+='<div data-toggle="collapse" data-parent="#accordion" href="#collapse'+itr+'" class="panel-heading">';
                                temp+='<h2 class="panel-title">';
                                    temp+='<a>'+val.text+'</a>';
                                temp+='</h2>';
                            temp+='</div>';
                    flag=1;
                }
            }
            if(flag==1)
            {
                if(sflag==0)
                {
                    temp+='<div id="collapse'+itr+'" class="panel-collapse collapse"><div class="panel-body">';
                    sflag=1;
                }
                if(val.type=="subsubtitle")
                    temp+='<h3>'+val.text+'</h3>';
                
                else if(val.type=="simple")
                    temp+='<p>'+val.text+'</p>';    
                else if(val.type=="quote")
                    temp+='<p style="text-align:center;font-weight:bold;font-family:ralewayT";font-size:20px;>'+val.text+'</p>';    
                else if(val.type=="image")
                    temp+='<img src="'+val.text+'">';           
                else if(val.type=="list")
                    $.each(val.text,function(keyx,valx){
                        temp+='<p><span bullet></span>'+valx+'</p>';
                    });
                else if(val.type=="sublist")
                    $.each(val.text,function(keyx,valx){
                        temp+='<p><span subbullet></span>'+valx+'</p>';
                    });
            }
        });
        temp+='</div>';
        if(file != 78){
            temp+='</div></div><div class="panel panel-warning" style="animation-delay:'+del+'s">';del+=0.2;
            temp+='<div data-toggle="collapse" data-parent="#accordion" href="#collapse98" class="panel-heading">';
                temp+='<h4 class="panel-title">';
                    temp+='<a>TEAM SIZE</a>';
                temp+='</h4>';
            temp+='</div>';
            temp+='<div id="collapse98" class="panel-collapse collapse">';
                temp+='<div class="panel-body">';
                    $.each(data.teamSize,function(key,val){
                        temp+='<h4 style="text-transform:capitalize">'+val.type+' : '+val.val+'</h4>';    
                    })
                temp+='</div>';
            }
            temp+='</div>';
        temp+='</div>';

        temp+='<div class="panel panel-warning" style="animation-delay:'+del+'s">';
            temp+='<div data-toggle="collapse" data-parent="#accordion" href="#collapse99" class="panel-heading">';
                temp+='<h4 class="panel-title">';
                    temp+='<a>CONTACT</a>';
                temp+='</h4>';
            temp+='</div>';
            temp+='<div id="collapse99" class="panel-collapse collapse">';
                temp+='<div class="panel-body">';
                    var cnt=1;
                    temp+='<div class="container" style="border:solid 0px white; width:95%">'
                    $.each(data.contact,function(key,val){
                        temp+="<div class='col-sm-5 contact-tile' style='padding-right:5pt;border:1px solid #ff8820;width:100%; border-radius: 5px;'>";
                        temp+="<table style=' border:0px;width:100%;'><tr><td class='contact-tile' style='border:0px;width:100px;font-size:20px' rowspan=2>"
                        temp+='<img style="width:100px; height:120px" src="assets/events/conv_images/'+file+'_'+cnt+'.jpg"></td>'
                        temp+='<tr style="border:0px; padding-left:5pt; text-align:center; padding-right:5pt; vertical-align:middle;color:#ff8820;"><h5 style="white-space:nowrap">'+val.name+' </h4><BR> <a style="white-space:nowrap;color:White!important;"href="tel:'+val.phone.replace(" ","")+'"><span class="glyphicon glyphicon-earphone"></span>&nbsp'+val.phone+'</a></h4></td></tr>';    
                        temp+='</table></div>';
                        if(cnt==1)
                            temp+="<div class='col-sm-1'>&nbsp;</div>";
                        cnt++;
                    })
                    temp+="</div>";
                temp+='</div>';
            temp+='</div>';
        temp+='</div>';

        $('[modalcontent]').append(temp);
        $('[titleContainer]').css('overflow','hidden');

        $('[titleContainer]').each(function(){
            cur=$(this);
            cur_size=parseInt(cur.find('h1').css('font-size'));
            cur.find('h1').css('font-size',(cur_size-5)+'px');
        });
        $('.panel').addClass('animated flipInY'); 
    })
}

function WprepareModal(file)
{
    var itr=0,flag=0,temp="",start=0,sflag=0;
    del=0;
    $.getJSON('assets/workshops/data/'+file+'.json',function(data){
        $.each(data.root,function(key,val){
            if(val.type=="title")
                temp+='<div titleContainer><h1>'+val.text+'</h1></div>';
            if(val.type=="subtitle")
            {
                if(start==0)
                {
                    temp+='<div class="panel-group" id="accordion">';
                    start=1;
                }
                if(flag==1)
                {
                    temp+='</div></div></div>';
                    flag=0;
                    sflag=0;
                    itr+=1;    
                }
                if(flag==0)
                {
                    if(val.text!="FEE")
                    {   
                        temp+='<div class="panel panel-warning" style="animation-delay:'+del+'s">';del+=0.1;
                        temp+='<div data-toggle="collapse" data-parent="#accordion" href="#collapse'+itr+'" class="panel-heading">';
                            temp+='<h2 class="panel-title">';
                                temp+='<a>'+val.text+'</a>';
                            temp+='</h2>';
                        temp+='</div>';
                        flag=1;
                    }
                        
                }
            }
            if(flag==1)
            {
                if(sflag==0)
                {
                    temp+='<div id="collapse'+itr+'" class="panel-collapse collapse"><div class="panel-body">';
                    sflag=1;
                }
                if(val.type=="subsubtitle")
                    temp+='<h3>'+val.text+'</h3>';
                else if(val.type=="simple")
                    temp+='<p>'+val.text+'</p>';    
                else if(val.type=="image")
                    temp+='<img src="'+val.text+'">';           
                else if(val.type=="list")
                    $.each(val.text,function(keyx,valx){
                        temp+='<p><span bullet></span>'+valx+'</p>';
                    });
                else if(val.type=="sublist")
                    $.each(val.text,function(keyx,valx){
                        temp+='<p><span subbullet></span>'+valx+'</p>';
                    });
            }
        });
        temp+='</div></div></div>';
        
        temp+='<div class="panel panel-warning" style="animation-delay:'+del+'s">';del+=0.1;
            temp+='<div data-toggle="collapse" data-parent="#accordion" href="#collapse99" class="panel-heading">';
                temp+='<h4 class="panel-title">';
                    if(file!=13)
                        temp+='<a>CONTACT</a>';
                    else
                        temp+="<a>தொடர்பு கொள்ள</a>";
                temp+='</h4>';
            temp+='</div>';
            temp+='<div id="collapse99" class="panel-collapse collapse">';
                temp+='<div class="panel-body">';
                     var cnt=1;
                    temp+='<div class="container" style="border:solid 0px white; width:95%">'
                    $.each(data.contact,function(key,val){
                        temp+="<div class='col-sm-5 contact-tile' style='padding-right:5pt;border:1px solid #ff8820; border-radius: 5px;'>";
                        temp+="<table style=' border:0px;width:100%'><tr><td class='contact-tile' style='border:0px;width:100px' rowspan=2>"
                        temp+='<img style="width:100px; height:120px" src="assets/workshops/conv_images/'+file+'_'+cnt+'.jpg"></td>'
                        temp+='<tr style="border:0px; padding-left:5pt; text-align:center; padding-right:5pt; vertical-align:middle;color:#ff8820"><h4 style="white-space:nowrap">'+val.name+' </h4><BR> <a style="white-space:nowrap;color:White!important;"href="tel:'+val.phone.replace(" ","")+'"><span class="glyphicon glyphicon-earphone"></span>&nbsp'+val.phone+'</a></h4></td></tr>';    
                        temp+='</table></div>';
                        if(cnt==1)
                            temp+="<div class='col-sm-1'>&nbsp;</div>";
                        cnt++;
                    })
                    temp+="</div>";
                temp+='</div>';
            temp+='</div>';
        temp+='</div>';

        $('[modalcontent]').append(temp);   
        
        $('[titleContainer]').css('overflow','hidden');
        $('[titleContainer]').each(function(){
            cur=$(this);
            cur_size=parseInt(cur.find('h1').css('font-size'));
            cur.find('h1').css('font-size',(cur_size-7)+'px');
            cur.find('h1').css('letter-spacing','0px');
            cur.find('h1').css('padding-bottom','10px');
        });
       
        $('.panel').addClass('animated flipInY');   
    })
}