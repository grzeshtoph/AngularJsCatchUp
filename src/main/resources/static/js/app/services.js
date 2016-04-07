(function () {
    app.factory('dCommServices', ['$http', function ($http) {
        return {
            getOperators: function () {
                return $http.get('/dcommservice/operators')
                    .then(function (response) {
                        return response.data.results;
                    });
            }
        }
    }]);

    app.factory('GoJSServices', function() {
        return {
            getNodeTemplateMap: function(inputModel) {
                var templateMap = new go.Map("string", go.Node);

                angular.forEach(inputModel, function(operatorFromModel) {
                    var operatorName = operatorFromModel.key;
                    var operatorTemplate = $(go.Node, "Table",
                        {
                            selectionAdorned: false,
                            textEditable: true,
                            locationObjectName: "BODY",
                            locationSpot: go.Spot.Center
                        },
                        // BODY
                        $(go.Panel, "Auto",
                            {
                                name: "BODY",
                                row: 1,
                                column: 1
                            },
                            $(go.Shape, "Ellipse",
                                {
                                    width: 150, height: 100,
                                    fill: "#D1DAE0"
                                }
                            ),
                            $(go.TextBlock,
                                {
                                    stroke: "#496192",
                                    margin: 13,
                                    alignment: go.Spot.TopCenter,
                                    isMultiline: false,
                                    editable: true,
                                    font: "bold 14pt serif",
                                    name: "nodeTextBlock"
                                },
                                new go.Binding("text", "key"))
                        ),
                        //LEFT
                        $(go.Panel, "Vertical",
                            new go.Binding("itemArray", "leftArray"),
                            { row: 1, column: 0,
                                itemTemplate:
                                    $(go.Panel, "Auto",
                                        {
                                            //alignment: go.Spot.BottomCenter
                                            _side: "left",
                                            fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
                                            fromLinkable: false, toLinkable: true, cursor: "pointer"
                                        },
                                        new go.Binding("portId", "portId"),
                                        $(go.Shape, "Ellipse",
                                            {
                                                cursor: "pointer",
                                                height: 25,
                                                width: 45,
                                                fill: "lightblue"
                                            },
                                            new go.Binding("fill", "portColor"))
                                        ,$(go.TextBlock,
                                            {
                                                stroke: "black",
                                                margin: 5,
                                                editable: true,
                                                isMultiline: false,
                                                toLinkable: true,
                                                fromLinkable: false
                                            },
                                            new go.Binding("text", "name"))
                                    )
                            }
                        ),
                        //RIGHT
                        $(go.Panel, "Vertical",
                            new go.Binding("itemArray", "rightArray"),
                            { row: 1, column: 2,
                                itemTemplate:
                                    $(go.Panel,
                                        {
                                            _side: "right",
                                            fromSpot: go.Spot.Right,
                                            toSpot: go.Spot.Right,
                                            fromLinkable: true,
                                            toLinkable: false,
                                            cursor: "pointer"
                                        },
                                        new go.Binding("portId", "portId"),
                                        $(go.Shape, "Ellipse",
                                            {
                                                cursor: "pointer",
                                                height: 25,
                                                width: 45,
                                                fill: "#496192"
                                            },
                                            new go.Binding("fill", "portColor"))
                                        ,$(go.TextBlock,
                                            {
                                                stroke: "black",
                                                margin: 5,
                                                editable: true,
                                                isMultiline: false,
                                                toLinkable: true,
                                                fromLinkable: false
                                            },
                                            new go.Binding("text", "name"))
                                    )  // end itemTemplate
                            }
                        )
                    );

                    templateMap.add(operatorName, operatorTemplate);
                });

                return templateMap;
            }
        }
    });
})();

