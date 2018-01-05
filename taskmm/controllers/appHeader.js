app.controller('appHeader',['$scope','appLink','appName',function($scope,appLink,appName){
	$scope.appName=appName;
	$scope.menu=[{
		        "active": false,
                "link": "\/"+appLink+"\/home",
                "text": "home"},
				{
                "active": false,
                "link": "\/"+appLink+"\/aboutus",
                "text": "Aboutus"},
            {
                "active": false,
                "link": "\/"+appLink+"\/gallary",
                "text": "Gallary"},
            {
                "active": true,
                "link": "\/"+appLink+"\/contact",
                "text": "contactus"}]
	
}]);
