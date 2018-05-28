/************************
	Porfolio Page Scripts
*************************/

var projects = document.querySelectorAll('.project');

projects.forEach(function(project) {
	project.addEventListener('click', function() {
		project.classList.toggle('is-project-active');
	});
});