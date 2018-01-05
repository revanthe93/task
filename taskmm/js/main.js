var app=angular.module("myapp",['ui.router']);
app.constant('appName','MYapp');
app.constant('appLink','taskmm/#!')


app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider.state('home',{
		url : "/home",
		views : {
			'wrapper@': {
				controller : "homeController",
				templateUrl : "views/home.html" 
			}
		}
	})
	
	.state('aboutus',{
		url : "/aboutus",
		views : {
			'wrapper@': {
				controller : "aboutusController",
				templateUrl : "views/aboutus.html" 
			}
		}
	})
         .state('contact',{
		url : "/contact",
		views : {
			'wrapper@': {
				controller : "contactController",
				templateUrl : "views/contact.html" 
			}
		}
	})
	 .state('gallary',{
		url : "/gallary",
		views : {
			'wrapper@': {
				controller : "gallaryController",
				templateUrl : "views/gallary.html" 
			}
		}
	})
});