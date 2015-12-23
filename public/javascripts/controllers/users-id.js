module.exports = ['$routeParams', '$scope', '$location', '$http', '$rootScope', 'sweet', function($routeParams, $scope, $location, $http, $rootScope, sweet) {
        $rootScope.nav = '';

        if ($rootScope.user.id == $routeParams.id) {
            $scope.email = $rootScope.user.email;
        } else {
            $http.get('/api/users/' + $routeParams.id).success(function(data) {
                $scope.email = data.email;
            }).error(function() {
                sweet.show('Oops...', 'Something went wrong!', 'error');
            });
        }

        $scope.updateUser = function () {
                $http.put('/api/users/' + $routeParams.id, {
                    email: $scope.email,
                    password: $scope.password
                }).success(function(data) {
                    sweet.show('The user has been updated.', '', 'success');
                    $location.path('/users/' + data.id.toString());
                }).error(function() {
                    sweet.show('Oops...', 'Something went wrong!', 'error');
                });
        };
}];