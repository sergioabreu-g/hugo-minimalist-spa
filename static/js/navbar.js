
var navbar = function(){
	this.navbar = document.getElementsByClassName("navbar")[0];
	this.collapse_button = this.navbar.getElementsByClassName("collapsible-menu")[0];
	this.navbar_elements = this.navbar.getElementsByClassName("navbar-element");
	
	this.menu_opened = false;
	this.menu_active = false;
	
	this.resize();
	var current_context = this;
	window.addEventListener('resize', function(){current_context.resize()});
	this.navbar.addEventListener('click', function(){current_context.collapsible_menu_clicked()});
}

navbar.prototype.constructor = navbar;

navbar.prototype.resize = function() {		
	//Set all elements to be displayed by default
	this.menu_active = false;
	this.display_elements();
	this.collapse_button.style.display= "none";
	this.navbar.style.flexDirection = "row";

	//Calculate the navbar elements width
	var elements_width = 0;
	for (var i = 0; i < this.navbar_elements.length; i++){
		elements_width += this.navbar_elements[i].offsetWidth;
	}
	
	//If the displayed elements do not fit inside the navbar properly,
	//use the collapsible menu instead
	if (elements_width/this.navbar.offsetWidth > 0.75) {
		this.menu_active = true;
		this.hide_elements();
		this.collapse_button.style.display= "block";
		this.navbar.style.flexDirection = "column";
	}
}

navbar.prototype.display_elements = function() {
	for (var i = 0; i < this.navbar_elements.length; i++){
		this.navbar_elements[i].style.display = "block";
	}
	this.collapse_button.style.marginBottom = "0.7rem";
}

navbar.prototype.hide_elements = function() {
	for (var i = 0; i < this.navbar_elements.length; i++){
		this.navbar_elements[i].style.display = "none";
	}
	this.collapse_button.style.marginBottom = "0";
}

navbar.prototype.collapsible_menu_clicked = function() {
	if (this.menu_active) {
		if (this.menu_opened) this.hide_elements();
		else this.display_elements();

		this.menu_opened = !this.menu_opened;
	}
}