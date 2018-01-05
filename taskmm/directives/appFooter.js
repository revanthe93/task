app.directive("appFooter",function(){
			return {
					restrict:'E',//allwoed values are [E=elements,A=atributes,M=comments,C=class]
					replace:true,
					templateUrl:'views/appFooter.html'
			}
		});