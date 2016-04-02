app.controller('DCommCtrl', ['$scope', 'dCommServices', function($scope, dCommServices) {
    $scope.data = {};

    dCommServices.getOperators().then(function(data) {
        $scope.data.operators = data;
    }, function(errResponse) {
        $scope.data.error = errResponse.data;
    });

    $scope.$watch('data.selectedDCommOperator', function(newVal, oldVal) {
        if (newVal && !angular.equals(newVal, oldVal)) {
            $scope.data.info = "Operator changed to " + newVal.operatorname;
        }
    });
}]);