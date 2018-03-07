



$(document).ready(function(){
	var tab1=new Tab(".tabNew1");
	var tab2=new Tab(".tabNew2");
});


function Tab(sel){
	this.active_name="on";
	this.$item;
	this.$item_li;
	this.$item_div;
	this.initObj(sel);
  this.bindingEvent();
}

Tab.prototype.initObj=function(el){
	this.$item = $(el);
	this.$item_li=this.$item.find('li');
	this.$item_li_a=this.$item_li.children('a');
	this.$item_div=this.$item.children('div');
}

Tab.prototype.bindingEvent=function(){
	var this2=this;
	this.$item_li_a.on('click',function(e){
		e.preventDefault();
		var i=$(this).parent().index();
		var isOn=$(this).hasClass(this2.active_name);
		var isAnimated=this2.$item_div.is(":animated");
		if(!isOn && !isAnimated){
			this2.activateBtn(i);
			this2.activatePanel(i);
		}
	});
}

Tab.prototype.activateBtn=function(i){
	this.$item_li_a.removeClass(this.active_name);
	this.$item_li.eq(i).children('a').addClass(this.active_name);
}

Tab.prototype.activatePanel=function(i){
	this.$item_div.stop().fadeOut();
	this.$item_div.eq(i).stop().fadeIn();
}
