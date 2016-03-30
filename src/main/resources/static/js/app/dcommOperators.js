app.controller('DCommCtrl', ['$scope', 'dCommServices', function($scope, dCommServices) {
    $scope.operators = null;
    $scope.error = null;

    dCommServices.getOperators().then(function(data) {
        $scope.operators = data;
    }, function(errResponse) {
        $scope.error = errResponse.data;
    });
}]);