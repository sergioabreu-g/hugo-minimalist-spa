'use strict';

var router = function(routes){
	this.routes = routes;
	this.current_id = id_from_hash(window.location.hash);
	this.tab_elements = {};
	
	this.initial_load();
	
	this.swap_contents(this.current_id);
	
	var current_context = this;
	window.addEventListener('hashchange', function(){current_context.url_changed_callback()});
}

router.prototype.constructor = router;

router.prototype.url_changed_callback = function(){
	var id = id_from_hash(window.location.hash);
	this.swap_contents(id);
	this.current_id = id;
}

router.prototype.swap_contents = function(id){
	this.tab_elements[this.current_id].style = "display: none;";
	this.tab_elements[id].style = "display: block;";	
}

router.prototype.initial_load = function() {
	for (var id in this.routes) {
		this.tab_elements[id] = document.getElementById(id);
		
		(function(route, element) {
			$.ajax({
				url : route,
				success : function(result){
					element.innerHTML = result;
				}
			});
		})(this.routes[id], this.tab_elements[id]);
	}
}

var id_from_hash = function(hash) {
	if (hash == '') return default_id;
	else return hash.replace('#', '');
}