$(function(){
	var DATA = [];

		DATA.push({
			label: 'Home',
			url: 'index.html'
		});
		DATA.push({
			label: 'Events',
			url: 'events.html'
		});
		DATA.push({
			label: 'Workshops',
			url: 'workshops.html'
		});
		DATA.push({
			label: 'Eureka',
			url: 'eureka.html'
		});
		DATA.push({
			label: 'About',
			url: 'about.html'
		});
		DATA.push({
			label: 'Accomodation',
			url: 'accommodation.html'
		});
		DATA.push({
			label: 'Team',
			url: 'team.html'
		});
	
	var OPTIONS = {
		key: 'url',
		pageLoader: {
			target: null,
			key: 'url'
		}
	}

	var FUNC = {
		onInit: function() {
			$('.cm-selected-label img').attr('src','assets/image/k.png');
			console.log('INIT');
		},
		onChangeBegin: function() {
			console.log('CHANGE');
		},
		onChangeComplete: function(d) {
			console.log('CHANGE_COMPLETE')
			console.log(d)
		}
	};
	$('body').prepend('<img src="assets/image/button.png" navbutton style="transition:0.2s" stat="0"><div navlogo style="z-index:500;"><img src="assets/image/kry.png" navlogo></div><div navcirc id="my-circle-menu" style="z-index:1050;position:fixed;top:0;" class="cm-container"><ul class="cm-items"></ul><div class="cm-selected-container"><div class="cm-selected-label"><img src="assets/events/logo/1.png"><span></span></div></div></div>');
	prev_bg="";
	$('[navbutton]').click(function(){
		if($(this).attr('stat')==0)
		{
			if (typeof closemodal == 'function') { 
				closemodal(); 
			}
			cur=$(this);
			$('#blk').css('z-index','1');
			$(this).css('animation','navAnim 0.75s linear');
			setTimeout(function(){
				cur.attr('src','assets/image/close.png');
				cur.css('animation','none');
			},250);
			
			$('[navcirc]').css('opacity','1');
			$('.overl').css('transform','translateX(0%)');
			//$('#main').css('transform','scale(0)');
			$('[navcirc]').css('left','-440');
			$('[navlogo]').css('opacity','1');
			$('[navlogo]').css('transform','translateX(0)');
			$(this).attr('stat','1');
			
		}
		else{
            $('#blk').css('z-index',"-1");
			cur=$(this);
			$(this).css('animation','navAnim 0.75s linear');
			setTimeout(function(){
				cur.attr('src','assets/image/button.png');
				cur.css('animation','none');
			},250);
			$('[navcirc]').css('opacity','0');
			$('.overl').css('transform','translateX(100%)');
			//$('#main').css('opacity','1');
			$('[navlogo]').css('opacity','0');
			$('[navlogo]').css('transform','translateX(100%)');
			//$('#main').css('transform','scale(1)');
			$('[navcirc]').css('left','-630');
			$(this).attr('stat','0');
			
		}
	})
	var circleMenu = new CircleMenu($('#my-circle-menu'), DATA, SELECTED, OPTIONS, FUNC);
});



$('body').prepend('<div class="navCirc"><div class="opt circ" ref="helpdesk.html" z="1" cap="Help&nbspDesk"></div><div class="opt circ" z="2" ref="login.html" cap="Login"></div><div class="opt circ" z="3" ref="signup.html" cap="Sign&nbspUp"></div><div class="lft circ" ref="https://www.facebook.com/psgkriya/" z="4" cap=""></div><div class="lft circ" ref="https://www.instagram.com/kriya_psgtech/" z="5" cap=""></div><div class="lft circ" z="6" ref="https://twitter.com/kriya_psgtech" cap=""></div><div class="lft circ" ref="https://www.youtube.com/channel/UC3p_a8g876d50MxI7Kg5cMw" z="7" cap=""></div><div class="top circ" z="8" cap=""></div></div>')
$('.circ').each(function(){
	$(this).css('z-index',parseInt($(this).attr('z'))*100);
	$(this).append('<img src="assets/image/'+$(this).attr('z')+'.png">');
	$(this).append('<h4>'+$(this).attr('cap')+'</h4');
})
$('.opt').click(function(){
	window.location.href=$(this).attr('ref');
})
$('.lft').click(function(){
	window.location.href=$(this).attr('ref');
})
navstat=0;
$('.navCirc .top').click(function(){
	if(!navstat)
	{
		$('.navCirc .opt').each(function(){
			$(this).css('bottom',parseInt($(this).attr('z'))*90-parseInt($(this).attr('z')-1)*20);
			$(this).css('opacity',"1");
			$(this).css('transform',"scale(0.9)");
		})
		$('.navCirc .lft').each(function(){
			$(this).css('right',(parseInt($(this).attr('z'))-3)*75-parseInt($(this).attr('z')-5)*15);
			$(this).css('opacity',"1");
			$(this).css('transform',"scale(0.8)");
		})
		navstat=1;
	}
	else{
		$('.navCirc .opt').each(function(){
			$(this).css('bottom',"20");
			$(this).css('opacity',"0");
			$(this).css('transform',"scale(0)");
		})
		$('.navCirc .lft').each(function(){
			$(this).css('right',"20");
			$(this).css('opacity',"0");
			$(this).css('transform',"scale(0)");
		})
		navstat=0;
	}
})
$('.opt').hover(function(){
	$(this).find('h4').css('opacity','1');
	$(this).find('h4').css('transform','scale(1)');
},function(){
	$(this).find('h4').css('opacity','0');
	$(this).find('h4').css('transform','scale(0)');
})