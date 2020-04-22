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
			label: 'Accommodation',
			url: 'accommodation.html'
		});
		DATA.push({
			label: 'Team',
			url: 'team.html'
		});
		if(window.location.href.indexOf('helpdesk')!=-1)
		{
			DATA.push({
				label: 'Help Desk',
				url: 'helpdesk.html'
			});
			SELECTED = 'helpdesk.html';
		}
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
			$('.cm-selected-label span').click(function(){
				if($(this).text().toLowerCase()=="home")
					window.location.href='index.html';
				else
					window.location.href=$(this).text().toLowerCase()+'.html';
			})
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

//$('body').append('<div class="logNav"><div class="top"><img src="assets/image/user.png" class="img-responsive"></div><div class="middle"><a login href=""><img src="assets/image/login.png" class="img-responsive"></a></div><div class="bottom"><a signup href=""><img src="assets/image/signup.png" class="img-responsive"></a></div></div>');
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

lognav=0;
$('.logNav [signup]').attr('href','');
$('.logNav [login]').attr('href','');

$('.logNav').find('.top').click(function(){
	if(!lognav)
	{
		$('.middle').css('bottom','105px');
		$('.middle').css('transform','scale(0.95)');
		$('.bottom').css('bottom','185px');
		$('.bottom').css('transform','scale(0.95)');
		lognav=1;
	}
	else{
		$('.middle').css('bottom','25px');
		$('.middle').css('transform','scale(1)');
		$('.bottom').css('bottom','25px');
		$('.bottom').css('transform','scale(1)');
		lognav=0;
	}
	
})
