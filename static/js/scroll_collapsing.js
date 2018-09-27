var scroll_collapsing = function(main_scroll_element) {
	this.header_element = document.getElementsByClassName("header")[0];
	this.navbar_element = document.getElementsByClassName("navbar")[0];
	this.general_layout_element = document.getElementsByClassName("general-layout")[0];
	this.header_margin = this.header_element.style.margin;
		
	this.main_scroll_element = main_scroll_element;
	this.last_y_scroll = 0;
	this.scroll_threshold = 110;
	
	var current_context = this;
	this.main_scroll_element.addEventListener('scroll', function(){current_context.on_scroll()});
	window.addEventListener('resize', function(){current_context.reset_on_resize()});
}

scroll_collapsing.prototype.on_scroll = function() {
	if (window.getComputedStyle(this.general_layout_element).flexDirection == "column") {
		var current_y_scroll = this.main_scroll_element.scrollTop;

		if (current_y_scroll < this.last_y_scroll - this.scroll_threshold || current_y_scroll == 0) {
			this.expand();
			this.last_y_scroll = current_y_scroll;
		}
		else if (current_y_scroll > this.last_y_scroll + this.scroll_threshold) {
			this.collapse();
			this.last_y_scroll = current_y_scroll;
		}
	}
}

scroll_collapsing.prototype.reset_on_resize = function(){
	this.expand();
	this.last_y_scroll = this.main_scroll_element.scrollTop;
}

scroll_collapsing.prototype.expand = function() {
	this.header_element.style.maxHeight = "100%";
	this.header_element.style.margin = this.header_margin;
	
	this.navbar_element.style.maxHeight = "100%";
}

scroll_collapsing.prototype.collapse = function() {
	this.header_element.style.maxHeight = "0";
	this.header_element.style.margin = "0";
	
	this.navbar_element.style.maxHeight = "0";
}

scroll_collapsing.prototype.constructor = scroll_collapsing;