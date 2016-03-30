app.factory('dCommServices', ['$http', function($http) {
    return {
        getOperators: function() {
            return $http.get('/dcommservice/operators')
                .then(function(data) {
                    return data;
                });
        }
    }
}]);

