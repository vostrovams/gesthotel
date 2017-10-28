angular.module('hotel')
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "partials/home/home.html"
            })
            .when("/user", {
                templateUrl: "partials/user/user.html",
                controller: 'UserController as userCtrl'
            })
            .when("/auth", {
                templateUrl: "partials/auth/auth.html"
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
