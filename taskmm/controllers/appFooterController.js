app.controller('appFooterController',['$scope','appLink',function($scope,appLink){
	$scope.footers=[{
                "active": true,
                "link": "\/"+appLink+"\/home",
                "text": "home	"},
            {
                "active": false,
                "link":"\/"+appLink+"\/aboutus",
                "text": "About Us"},
            {
                "active": false,
                "link": "\/"+appLink+"\/gallary",
                "text": "Gallary"},
			{
                "active": false,
                "link": "\/"+appLink+"\/contact",
                "text": "contact"}];
				
				
				
		
		$scope.usefuls= 
			[
			{
				"link":"\/",
				"text":"Site Map"
			},
			{
				"link":"\/",
				"text":"FAQ"
			},
			{
				"link": "\/"+appLink+"\/blog",
				"text":"Blog"
			}
			];
			
			
}]);
