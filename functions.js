
function showString(show) {
	var showText = "<div class='show'>"
	showText += "<div class='date'>"+show["date"]+"</div>"
	showText += "<div class='venue'>"+show["venue"]+"</div>"
	showText += "<div class='city'>"+show["city"]+"</div>"
	showText +="</div>"
	return showText
}
function addSched() {
	var i;
	for (i=0; i<shows.length; i++) {
	$("#show_block").append(showString(shows[i]));
	}
}