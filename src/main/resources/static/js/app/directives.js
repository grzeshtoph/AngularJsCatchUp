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
    
    app.directive('goDiagram', function() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            template: '<div style="width:400px; height:150px; background-color: #DAE4E4;"></div>',
            link: function(scope, element, attrs) {
                var diagram = $(go.Diagram, element[0], {
                    initialContentAlignment: go.Spot.Center,
                    "undoManager.isEnabled": true
                });
            }
        }

    });
})();