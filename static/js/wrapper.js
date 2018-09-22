'use strict';

window.onload = function() {
	var my_router;
	var my_routes = load_routes();
	
	if (my_routes != {}){
		my_router = new router(load_routes());
	}
	else {
		console.log("Couldn't load routes");	
	}
}