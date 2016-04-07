(function () {
    app.controller('GoJSCtrl', ['$scope', function($scope) {
        $scope.data = {
            actualModel: [],
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
    }]);
})();