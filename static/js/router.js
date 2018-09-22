'use strict';

var router = function(routes){
	this.routes = routes;
	this.current_id = id_from_hash(window.location.hash);
	this.tab_elements = {};
	
	this.initial_load();
	
	//This initial 'fake' call allows to initialize contents
	//and link values
	this.url_changed_callback(this.current_id);
	
	//Adds the callback along with the context of the instance
	var current_context = this;
	window.addEventListener('hashchange', function(){current_context.url_changed_callback()});
}

router.prototype.constructor = router;

router.prototype.initial_load = function() {	
	//Iterate through every route, looking for the right HTML element
	//and adding its content from an AJAX async call
	for (var id in this.routes) {
		this.tab_elements[id] = document.getElementById(id);
		
		(function(route, element) {
			$.ajax({
				url : route,
				success : function(result){
					//Loads each content page
					element.innerHTML = result;
					
					//The loaded page is surrounded by a placeholder '<div>' whose id
					//is the title set by the user in the Markdown file (if there's any)
					var inner_div = element.getElementsByTagName('div')[0];
					
					//If the user has specified a title, we change the navbar element
					//to use it
					if (inner_div.id != "") {
						document.getElementById("navbar-"+element.id).getElementsByTagName('a')[0].innerHTML = inner_div.id.split("-")[1];
					}
					
					//Finally get disposed of the placeholder inner '<div>'
					element.innerHTML = inner_div.innerHTML;
				},
				
				error: function(error) {
					console.log("Error loading file from route: " + route + " [Ignore this if you haven't setup your website content yet]")
				}
			});
		})(this.routes[id], this.tab_elements[id]);
	}
}

router.prototype.url_changed_callback = function(){
	var id = id_from_hash(window.location.hash);
	
	//Update contents each time the URL changes
	this.swap_contents(id);
	
	this.current_id = id;
}

router.prototype.swap_contents = function(id){	
	this.tab_elements[this.current_id].style = "display: none;";
	this.tab_elements[id].style = "display: block;";
}

var id_from_hash = function(hash) {
	if (hash == '') return default_id;
	else return hash.replace('#', '');
}