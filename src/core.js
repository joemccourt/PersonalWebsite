var JOE = {};

JOE.main = function() {
	JOE.displayProjects();
	JOE.displayFavs();
};

window.onload = JOE.main;

JOE.setProjectHeight = function() {
	var projects = JOE.projects;
	for(var key in projects) {
		var project = projects[key];
		var projectDiv = $("#"+key);

		var cw = 0.75*projectDiv.width();
		projectDiv.css({'height':cw+'px'});
	}

	console.log($("div.project-left").height());
	$("#projects").css({'height':$("div.project-left").height()})
};

JOE.resize = function() {
	JOE.setProjectHeight();
};

JOE.displayProjects = function() {

	var projectsDiv = $("#projects");

	var leftDiv = $('<div class="project-left"></div>');
	var rightDiv = $('<div class="project-right"></div>');


	projectsDiv.append(leftDiv);
	projectsDiv.append(rightDiv);

	var projects = JOE.projects;
	var i = 0;
	for(var key in projects) {
		var project = projects[key];

		var newProjectDiv = $('<div class="project" id="'+key+'"></div>');

		var title = $('<div class="project-title"></div>')
		title.html(project.title);
		newProjectDiv.append(title);

		var description = $('<div class="project-description"></div>')
		description.html(project.description);
		newProjectDiv.append(description);

		if(project.codeLink) {
			var codeLink = $('<a href="'+project.codeLink+'">code</a>');
			newProjectDiv.append(codeLink);
		}

		if(project.playLink) {
			var playLink = $('<a href="'+project.playLink+'">play</a>');
			newProjectDiv.append(playLink);
		}


		if(i%2 == 0) {
			leftDiv.append(newProjectDiv);
		} else {
			rightDiv.append(newProjectDiv);
		}

		i++;
	}

	JOE.setProjectHeight();
};

$(window).resize(function(){
	JOE.resize();
});

JOE.displayFavs = function() {
	var favsDiv = $("#favs");

	var favs = JOE.favs;
	var i = 0;
	for(var key in favs) {
		var fav = favs[key];

		var newFav = $('<div class="fav" id="'+key+'"></div>');

		var title = $('<div class="fav-title"></div>');
		var answer = $('<div class="fav-answer"></div>');

		title.html(fav.title);
		answer.html(fav.answer);
		
		newFav.append(title);
		newFav.append(answer);

		favsDiv.append(newFav);
	}
};





