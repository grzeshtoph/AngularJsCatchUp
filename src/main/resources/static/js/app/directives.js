(function () {
    app.directive('errorAlert', function() {
        return {
            restrict: 'E',
            scope: {
                error: '='
            },
            templateUrl: '/html/errorAlert.html'
        };
    });
    
    app.directive('goDiagramPalette', ['GoJSServices', function(goJSServices) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            template: '<div style="height: 450px; background-color: #DAE4E4;"></div>',
            controller: ['$scope', function($scope) {
            }],
            link: function(scope, element, attrs) {
                var palette = $(go.Palette, element[0]);

                palette.model = new go.GraphLinksModel(scope.model);
                palette.model.linkFromPortIdProperty = "fromPort";
                palette.model.linkToPortIdProperty = "toPort";
                palette.nodeTemplateMap = goJSServices.getNodeTemplateMap(scope.model);
            }
        }
    }]);

    app.directive('goDiagram', ['GoJSServices', function(goJSServices) {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                paletteModel: '=',
                saveDiagramReference: '&'
            },
            replace: true,
            template: '<div style="height: 450px; background-color: #DAE4E4;"></div>',
            controller: ['$scope', function($scope) {
            }],
            link: function(scope, element, attrs) {
                var diagram = $(go.Diagram, element[0],
                    {
                        allowDrop: true,
                        allowCopy: true,
                        initialContentAlignment: go.Spot.Center,
                        "undoManager.isEnabled": true
                    });
                diagram.model = new go.GraphLinksModel(scope.model);
                diagram.model.linkFromPortIdProperty = "fromPort";
                diagram.model.linkToPortIdProperty = "toPort";
                diagram.nodeTemplateMap = goJSServices.getNodeTemplateMap(scope.paletteModel);
                diagram.linkTemplate = $(go.Link,
                    {
                        curve: go.Link.Bezier,
                        relinkableFrom: true,
                        relinkableTo: true
                    },
                    $(go.Shape, {strokeWidth: 2}),
                    $(go.Shape, {toArrow: "Standard", stroke: null}),
                    $(go.TextBlock, "Transformation",
                        {
                            editable: true,
                            segmentOffset: new go.Point(0, -10),
                            isMultiline: false
                        }));
            }
        }
    }]);
})();