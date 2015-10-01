var page = {
	currentPage : 0,
	currentTop : 0,
	pageTop : [0, 960, 1830, 2735, 3625, 4555],
	init : function(){
		this.scrollPage();
		$(window).scroll(this.scrollPage);

		$(document).on("click","#circle-list li",this.popupCircle);
		$(document).on("click","#page-qna button",this.popupQuestion);

		$("#navigation li").each(this.navEvent);
		$("#menu-list li").each(this.btnEvent);
	},
	navEvent : function(){
		$(this).click(function(){
			var pageNum = $(this).attr("class").charAt(8);
			page.movePage(pageNum);
		})
	},
	btnEvent : function(){
		var img = $(this).children("img");
		$(this).hover(function(){
			img.attr("src",img.attr("src").replace(".png","_roll.png"));
		},function(){
			img.attr("src",img.attr("src").replace("_roll.png",".png"));
		});

		$(this).click(function(){
			var pageNum = $(this).attr("class").charAt(8);
			page.movePage(pageNum);
		})
	},
	scrollPage : function(){
		page.currentTop = $(document).scrollTop(); 

		for(var i = 0; i < page.pageTop.length; ++i){
			if(page.currentTop >= page.pageTop[i]) page.currentPage = i;
		}

		if(page.currentTop == 0){
			$("#navigation").addClass("hide");
		}else{
			$("#navigation").removeClass("hide");
		}

		var currentPageButton = $("#navigation .btn-menu"+page.currentPage);
		$("#navigation li").removeClass("rollup");
		currentPageButton.addClass("rollup");

	},
	movePage : function(pageNum){
		$("body").animate(
			{scrollTop : page.pageTop[pageNum]}
		);
	},
	popupCircle : function(){
		$("#popup-bg").css({display:"block"});
		$("#popup-box-circle").css({display:"block"});
	},
	popupQuestion : function(){
		$("#popup-bg").css({display:"block"});
		$("#popup-box-question").css({display:"block"});
	}
}

page.init();