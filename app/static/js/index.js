;(function($, banners,next ,prev){
	var banners = $(banners),
		next = $(next),
		prev = $(prev),
		len = banners.length,
		num = 0,
		control = '<div class="controls"></div>',
		oi = '<i></i>',
		timer = null;
	$(banners).parents('#banner').find('.layout').prepend(control);
	$.each(banners,function(i){
		$('.controls').append(oi);
		if(len==0){$('.controls i').eq(0).addClass('now')}
	});
	var controls = $('.controls i');
	if ( controls.length == 1 ) { controls.hide(); }
	run(0);
	autoPlay(num);
	$(banners, controls).on({ mouseover:function(){ clearInterval( timer ); },mouseout: function(){num = controls.parent().find('.now').index();autoPlay(num);} });
	controls.on('click', function(){clearInterval( timer ); num = $(this).index(); run(num); });
	next.on('click',function(){clearInterval( timer );num = controls.parent().find('.now').index();brNext(num);});
	prev.on('click',function(){clearInterval( timer );num = controls.parent().find('.now').index();brprev(num);});
	function init(i){
		controls.eq(i).addClass('now').siblings().removeClass('now');
		banners.eq(i).stop().animate({'opacity':1}, 300).siblings().stop().animate({'opacity':0}, 300);
	};
	function run(cur_i){
		init(cur_i);
		banners.each(function(i, ele){ banners.eq(i).css('z-index',i >= cur_i ? len-i+cur_i : cur_i-i); });
	};
	function autoPlay(num){
		timer = setInterval(function(){
			num++;
			if( num >= len ){ num = 0; };
			run(num);
		}, 3000);
	};
	function brNext(n){
		n++;n >= len ? n = 0 : n; run(n);
	};
	function brprev(n){
		n--; n <= -1 ? n = len-1 : n; run(n);
	}
})(jQuery, '#banner li','#banner .next','#banner .prev');
;(function($,box,item){
	function boxmove(){
		$(item).show();
		$(item).first().slideUp(1000,function(){
		 	$(box).append($(item).first());	
		});
	}
	timer = setInterval(boxmove,3000);
})(jQuery,'.announcement-slideup','.announcement-slideup li');


;(function($,prev,next,oul){
	var prev = $(prev),
		next = $(next),
		oul = $(oul),
		oliw = $(oul).find('li').outerWidth(true);
		next.on('click',function(){
			oul.stop().animate({'margin-left':-oliw},500,function(){
				$(oul).find('li').eq(0).appendTo(oul);
				oul.css({'margin-left':0});
			});
		});
		prev.on('click',function(){
			oul.find('li:last').prependTo(oul);
			oul.css({'margin-left':-oliw});
			oul.stop().animate({'margin-left':0},500);
		});
})(jQuery,'.cooperative .prev','.cooperative .next','.cooperative ul');

;(function($){
	var arr = [],chper = [], flag = 'off';
		$(window).scroll(function(){
			if(flag == 'off'){
				if($(window).scrollTop()>400 && $(window).scrollTop()<1300){
					$('.investment li').each(function(i){
						if($(this).find('canvas').length> 0){
							arr[i] = $(this).find('canvas').attr('id');
							chper[i] =$(this).find('canvas').data('pre');
							new CircleProgress({
								element: document.getElementById(arr[i]),
								circleLineWidth:3,
								backgroundColor: '#ededed',
								circleColor:'#f65d33',
								current: chper[i]=='0.00'?0: chper[i],
								progressEndWidth:32,
								progressEndHeight:32,
							});
						}else{
							return;
						}
					});	
					flag = 'on';
				}
			}
			else{
				return false;
			}
		});		
})(jQuery);

$(document).ready(function(){

	// 首页排行top5tab切换
    $(".num_top5 .num_top5_con").hide().eq(0).show();
    $(".left_box li").mouseover(function(){
        var index = $(this).index();
        // $(this).addClass('active').siblings('li').removeClass('active');

        $(".num_top5 .num_top5_con").hide().eq($(this).index()).show();

    });
    $(".left_box li").hover(function(){
	    $(this).addClass("active");
	},function(){
	    $(this).removeClass("active");
	});

     $(".left_box li").click(function(){
     	var index = $(this).index();
     	$(".num_top5 .num_top5_con").hide().eq($(this).index()).show();
        $(this).find(".price").hide(500);
        $(this).siblings().find(".price").show(100);
        $(this).addClass("scalebig").removeClass("active").siblings('li').removeClass("scalebig");
    });

});