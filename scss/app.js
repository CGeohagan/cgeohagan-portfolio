/************************
	Porfolio Page Scripts
*************************/

var projects = document.querySelectorAll('.project');
console.log(projects);

projects.forEach(function(project) {

	project.addEventListener('click', function() {
		console.log('clicking');
		project.classList.toggle('is-project-active');

	});
});