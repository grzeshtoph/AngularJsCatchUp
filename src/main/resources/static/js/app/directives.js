app.directive('errorAlert', function() {
    return {
        restrict: 'E',
        scope: {
            error: '='
        },
        templateUrl: '/html/errorAlert.html'
    };
});