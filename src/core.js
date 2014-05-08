var JOE = {};

JOE.main = function() {
	JOE.displayProjects();
	JOE.displayFavs();
};

window.onload = JOE.main;

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

		var newProjectDiv = $('<div class="project"></div>');

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

	projectsDiv.trigger('change');

};

JOE.displayFavs = function() {



};





