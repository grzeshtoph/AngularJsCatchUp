(function () {
    app.controller('GoJSCtrl', ['$scope', function($scope) {
        $scope.model = [
            {
                name:"Operator1",
                inputPorts:["IN1","IN2"],
                outputPorts:["OUT1","OUT2"]}
            ,{
                name:"Operator2",
                inputPorts:["IN1"],
                outputPorts:["OUT1"]
            }
        ];
    }]);
})();