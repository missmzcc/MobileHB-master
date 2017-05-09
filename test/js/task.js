$(function(){
	//mui 初始化
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});
	//选择时间
	(function($) {
		//获取下单时间
		var beginBtn = document.getElementById("beginTime");
		var endBtn = document.getElementById("endTime");
		mui(document).on('tap','.time_choose',function(e){
			var target = e.target;
			if(target.id === "beginTime"){
				var picker = new $.DtPicker();
				picker.show(function(rs){
					beginBtn.placeholder = rs.text;
				});
			}else if(target.id === "endTime"){
				var picker = new $.DtPicker();
				picker.show(function(rs){
					endBtn.placeholder = rs.text;
				});
			}
		});
		//获取派单时间
		var beginBtn2 = document.getElementById("beginTime2");
		var endBtn2 = document.getElementById("endTime2");
		mui(document).on('tap','.time_choose',function(e){
			var target = e.target;
			if(target.id === "beginTime2"){
				var picker = new $.DtPicker();
				picker.show(function(rs){
					beginBtn2.placeholder = rs.text;
				});
			}else if(target.id === "endTime2"){
				var picker = new $.DtPicker();
				picker.show(function(rs){
					endBtn2.placeholder = rs.text;
				});
			}
		});
		//打开新增窗口 mui阻止了a连接跳转 需要重写
		
		mui('body').on('tap','#add_task',
			function(){document.location.href=this.href;
		});
	})(mui);
	//查询按钮和新增按钮样式切换
	$(".mui-btn").click(function(){
		$(this).addClass("mui-btn-primary").siblings().removeClass("mui-btn-primary");
	})
	
})
