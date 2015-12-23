module.exports = ['$scope', '$location', '$http', '$rootScope', 'sweet', function($scope, $location, $http, $rootScope, sweet) {
        $rootScope.nav = 'login';

        if ($rootScope.user) {
            $location.path('/');
        }

        $scope.login = function () {
            $http.post('/login', {
                email: $scope.email,
                password: $scope.password
            }).success(function(data) {
                $rootScope.user = data;
                $location.path('/')
            }).error(function() {
                sweet.show('Oops...', 'Something went wrong!', 'error');
            });
        };
}];