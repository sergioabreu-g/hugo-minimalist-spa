
window.onload = function() {	
	var tabs = document.getElementById("tabs-list").children;
	for (var i = 0; i < tabs.length; i++){
		tabs[i].innerHtml = get_tab_file(tabs[i].id);
	}
}

get_tab_file = function(id) {
	$.ajax({
		url : "/tabs/"+id+"/index.html",
		success : function(result){
			insert_tab_html(id, result);
		}
	});
}

insert_tab_html = function(id, html) {
	document.getElementById(id).innerHTML = html;
}