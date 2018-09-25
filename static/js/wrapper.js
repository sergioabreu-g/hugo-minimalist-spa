'use strict';

window.onload = function() {
	var content_mask = "content-"
	
	var base_url = "tabs/";
	var base_file = "/index.html";
	
	var my_router;
	var my_navbar;
	var routes_result = load_routes(base_url, base_file, content_mask);
	
	if (routes_result['routes'] != {}){
		my_router = new router(routes_result['routes'], content_mask, routes_result['default_id']);
	}
	else {
		console.log("Couldn't load routes");	
	}
	
	my_navbar = new navbar();
}