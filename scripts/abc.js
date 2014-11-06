alert("hello");
angular.module('testapp',[])
	.controller('calculator', ['$scope', function($scope){
		$scope.clear_value = true;
		$scope.selected_operation = null;
		$scope.operation_keys = [{label: "+", func: function(a,b){return a+b}},
					 {label: "-", func: function(a,b){return a-b}},
					 {label: "*", func: function(a,b){return a*b}},
					 {label: "/", func: function(a,b){return a/b}}];
		$scope.resultText = 0;
		$scope.display = function(val)
		{
			if ($scope.clear_value) {
            			$scope.d = val;
            			$scope.clear_value = false;
        		}
			else
			{
            			$scope.d = $scope.d * 10 + val;
       			}
			$scope.valtwo = $scope.d;	
		};
		$scope.operation = function(val){
			alert(val);
			$scope.selected_operation = val;
			$scope.valone = $scope.d;
			$scope.valtwo = $scope.d;
			$scope.clear_value = true;
		};
		$scope.calc = function(){
			if($scope.selected_operation!=null)
			{
				$scope.d = Math.floor($scope.selected_operation($scope.valone,$scope.valtwo));
				$scope.clear_value = true;
				$scope.valone = $scope.d;
			}
		};
}]);