'use strict';

var router = function(routes){
	this.routes = routes;
	this.current_id = id_from_hash(window.location.hash);
	
	//Indexes allow a quick access to the next/previous elements
	//of an array given its id.
	this.tab_indexes = {};
	this.tab_elements = [];
	
	this.navigator_button_next;
	this.navigator_button_previous;
	
	this.initial_load();
	
	//This initial 'fake' call allows to initialize contents
	//and link values
	this.url_changed_callback(this.current_id);
	
	//Adds the callback along with the context of the instance
	var current_context = this;
	window.addEventListener('hashchange', function(){current_context.url_changed_callback()});
}

router.prototype.constructor = router;

router.prototype.url_changed_callback = function(){
	var id = id_from_hash(window.location.hash);
	
	//Update contents and links each time the URL
	//changes
	this.swap_contents(id);
	this.update_links(id);
	
	this.current_id = id;
}

router.prototype.swap_contents = function(id){
	this.tab_elements[this.tab_indexes[this.current_id]].style = "display: none;";
	this.tab_elements[this.tab_indexes[id]].style = "display: block;";	
}

router.prototype.initial_load = function() {
	this.navigator_button_next = document.getElementById("main-content-navigator-next");
	this.navigator_button_previous = document.getElementById("main-content-navigator-previous");
	
	//Iterate through every route, looking for the right HTML element
	//and adding its content from an AJAX async call
	for (var id in this.routes) {
		this.tab_elements.push(document.getElementById(id));
		this.tab_indexes[id] = this.tab_elements.length-1;
		
		(function(route, element) {
			$.ajax({
				url : route,
				success : function(result){
					element.innerHTML = result;
				}
			});
		})(this.routes[id], this.tab_elements[this.tab_indexes[id]]);
	}

}

router.prototype.update_links = function(id) {
	var next_number = this.tab_indexes[id]+1;
	var previous_number = this.tab_indexes[id]-1;
	
	if (next_number >= this.tab_elements.length) next_number = 0;
	if (previous_number < 0) previous_number = this.tab_elements.length-1;
	
	this.navigator_button_next.href = "#" + this.tab_elements[next_number].id;
	this.navigator_button_previous.href = "#" + this.tab_elements[previous_number].id;
}

var id_from_hash = function(hash) {
	if (hash == '') return default_id;
	else return hash.replace('#', '');
}