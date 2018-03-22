// Accordions
document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';
document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';

function hidePanels(){
	document.getElementById('eventsWeekContent').style.display = 'none';
	document.getElementById('comingUpContent').style.display = 'none';
	document.getElementById('pastEventsContent').style.display = 'none';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab';
	document.getElementById('comingUpTab').className = 'accordionPanelTab';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab';
}
function showEventsWeek(){
	hidePanels();
	document.getElementById('eventsWeekContent').style.display = 'block';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';
}
function showComingUp(){
	hidePanels();
	document.getElementById('comingUpContent').style.display = 'block';
	document.getElementById('comingUpTab').className = 'accordionPanelTab highlight';
}
function showPastEvents(){
	hidePanels();
	document.getElementById('pastEventsContent').style.display = 'block';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab highlight';
}

$(document).ready(function(){

	// Cycles
	$('#subContent1').cycle({
		fx: 'scrollHorz',
		speed: 600,
		timeout: 4000,
		delay: 1000
	});
	$('#subContent2').cycle({
		slides: '> div',
		speed: 600,
		timeout: 4000,
		delay: 4000
	});
	$('#subContent3').cycle({
		fx: 'scrollVert',
		reverse: 'true',
		speed: 600,
		timeout: 4000,
		delay: 2500
	});
	
});