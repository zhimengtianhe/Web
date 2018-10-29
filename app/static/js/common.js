;(function($,WeChat,weibo){
	var WeChat = $(WeChat),
		weibo = $(weibo);
		$(WeChat).hover(function(){
			if(!$(weibo).is(":animated")){
				$(weibo).find('div').hide();
			}
			$(this).find('div').stop().slideDown(400);
			},function(){
				$(this).find('div').stop().slideUp(400);
		});
		$(weibo).hover(function(){
			if(!$(WeChat).is(":animated")){
				$(WeChat).find('div').hide();
			}
			$(this).find('div').stop().slideDown(400);
			},function(){
				$(this).find('div').stop().slideUp(400);
		});
})(jQuery,'.WeChat','.weibo');
;(function($,btop){
	var btop = $(btop);
	btop.on('click',function(e){ 
		e.preventDefault(e);
		$('html,body').animate({ scrollTop:0},800);
	});
})(jQuery,'.backtop'); 



;(function($,a,b){
    var a = $(a);
    var b = $(b);
    a.on('click',function(){
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        b.hide();
        b.eq(i).show();
    });
})(jQuery,'.nav_block .nav_item','.nav_none_list');