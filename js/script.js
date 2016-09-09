$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
		dots: true
	}),
	data04 = unslider04.data('unslider');
	
	$('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});
	$(function(){
		$('#dowebok').fullpage({
			anchors: ['page1', 'page2', 'page3', 'page4','page5'],
			menu: '#menu',
	});
		});
	$(function(){
		$nihao=$(window).height();
		$("#carousel li,#carousel ul,.C_wraper").css("height",$nihao);
		$(".carouselp").css("height","0px")
	})

	
$(function(){
  for(var i=1;i<=$("#carousel ul li").length;i++){
	$("#carousel .C_wraper p").append("<span></span>");
  };
  $("#carousel span:first").addClass("current");
  $("#carousel span").click(function(){
    var aaa=$(this).index();
	$(this).addClass("current").siblings("span").removeClass("current");
	$("#carousel li").eq(aaa).stop().fadeIn().siblings("li").hide();
  })

      function scrolls(){
        if($("#carousel span:last").hasClass("current")){
         var next=0;
       }else{
         var next=$(".current").index()+1;
       }
       $("#carousel span").eq(next).triggerHandler("click"); 
     };
     niahoa=setInterval(scrolls,2000);
	
});

$(function(){
  $(".tab_head li").mouseover(function(){
	$(this).addClass("li").siblings("li").removeClass("li");
	index=$(this).index();
	$(this).parent(".tab_head").siblings(".tab").children("li").eq(index).show().siblings("li").hide();
   })
  $(".tab_head a").mouseover(function(){
    $(this).addClass("a").parents("li").siblings("li").children("a").removeClass("a");
	index=$(this).index();
	$(this).parent(".tab_head").siblings(".tab").children("li").eq(index).show().siblings("li").hide();
  });
});

$(function(){
		$nihao=$(window).height();
		$("#carousel li,#carousel ul,.C_wraper").css("height",$nihao);
		$(".carouselp").css("height","0px")
	})

    $(function(){
      $(".pagge5_list li").mouseover(function(){
        $(this).addClass("active,page5_before").siblings(".pagge5_list li").removeClass("active,");
				var sum=$(this).index();
				$(".list").eq(sum).fadeIn().siblings(".list").hide();			
      })
    });

//切换
$(function(){
				imgLength=$(".product li").length;  
				imgWidth=$(".product li").width(); 
				$(".product").width(imgLength*imgWidth); 
				for(i=1;i<=imgLength;i++){
					$(".page2").append("<span></span>");  
				}
				$(".page2 span:first").addClass("current2"); 
				$(".page2 span").mouseover(function(){
					$(this).addClass("current2").siblings(".page2 span").removeClass("current2");
					aa=$(this).index();
					$(".product").stop().animate({left:"-"+(imgWidth*aa)},1000)});
				function scrolls1(){
					bbb=$(".current2").index();
					if(bbb==imgLength-1){
						nextindex=0;
						}
					else{
						nextindex=bbb+1;	
						}
					$(".page2 span").eq(nextindex).triggerHandler("mouseover");
					}
				int=setInterval(scrolls1,3000);
				$(".second-wrap").mouseover(function(){clearInterval(int);})
						  .mouseout(function(){
						  	int=setInterval(scrolls1,3000);
			});
			});