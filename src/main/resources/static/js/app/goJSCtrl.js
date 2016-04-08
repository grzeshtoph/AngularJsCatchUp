(function () {
    app.controller('GoJSCtrl', ['$scope', function($scope) {
        $scope.data = {
            diagram: null,
            diagramModel: null,
            paletteModel: [
                {
                    key: 'Operator1',
                    aux: {
                        key: 'value0'
                    },
                    category: 'Operator1',
                    leftArray: [
                        {
                            portColor: 'lightblue',
                            portId: 'left0',
                            name: 'IN0'
                        },
                        {
                            portColor: 'lightblue',
                            portId: 'left1',
                            name: 'IN1'
                        }
                    ],
                    rightArray: [
                        {
                            portColor: 'green',
                            portId: 'right0',
                            name: 'OUT0'
                        },
                        {
                            portColor: 'green',
                            portId: 'right1',
                            name: 'OUT1'
                        }
                    ]
                },
                {
                    key: 'Operator2',
                    aux: {
                        key: 'value0'
                    },
                    category: 'Operator2',
                    leftArray: [
                        {
                            portColor: 'lightblue',
                            portId: 'left0',
                            name: 'IN0'
                        },
                        {
                            portColor: 'lightblue',
                            portId: 'left1',
                            name: 'IN1'
                        }
                    ],
                    rightArray: [
                        {
                            portColor: 'green',
                            portId: 'right0',
                            name: 'OUT0'
                        },
                        {
                            portColor: 'green',
                            portId: 'right1',
                            name: 'OUT1'
                        }
                    ]
                }
            ]
        };
        
        $scope.loadDiagramModel = function() {
            console.info("Load model");
            $scope.data.diagram.model = go.Model.fromJson($scope.data.diagramModel);
        };

        $scope.storeDiagramModel = function() {
            console.info("Store model");
            $scope.data.diagramModel = angular.copy($scope.data.diagram.model.toJson())
        };
        
        $scope.saveDiagram = function(diagram) {
            $scope.data.diagram = diagram;
            console.info('saveDiagram called');
            console.info(angular.toJson($scope.data.diagram.model));
        }
    }]);
})();