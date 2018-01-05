app.directive("appHeader",function(){
			return {
				restrict:'EA',//allwoed values are [E=elements,A=atributes,M=comments,C=class]
				replace:true,
				templateUrl:'views/appHeader.html'
			}
});