app.controller('DCommCtrl', ['$scope', 'dCommServices', function($scope, dCommServices) {
    $scope.name = 'Dublin Commute Controller';
    $scope.operators = null;
    $scope.error = null;

    dCommServices.getOperators().then(function(data) {
        $scope.operators = data;
    }, function(errResponse) {
        $scope.error = errResponse.data;
    });
}]);