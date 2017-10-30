angular.module('hotel')
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "partials/home/home.html"
            })
            .when("/user", {
                templateUrl: "partials/client/client.html",
                controller: 'clientController as clientCtrl'
            })
            .when("/auth", {
                templateUrl: "partials/auth/auth.html"
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
