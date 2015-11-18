var app= angular.module("myModule",[]);

app.controller("myController",function($scope){
	$scope.groceryItems=[{item:'bread', price: 2.00},{item:'oranges',price:3.00}];
	
	$scope.total=0;

	$scope.add=function(){
		$scope.groceryItems.push({item: $scope.newItem, price: $scope.newPrice});
		$scope.groceryItems.forEach(function(grocery){
			$scope.total+=grocery.price;
		})

	
	};


});