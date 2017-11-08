
angular.module('hotel')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {

                templateUrl: "partials/login/login.html"
                //controller: 'LoginController as loginCtrl'
            })

            .when("/home", {
                templateUrl: "partials/home/home.html"
            })
            .when("/reservation", {
                templateUrl: "partials/reservation/reservation01.html",
                controller: 'ReservationController as reservationCtrl'
            })
            .when("/reserv", {
                templateUrl: "partials/reservation/reservation.html",
                controller: 'ReservationController as reservationCtrl'
            })
            .when("/client", {
                templateUrl: "partials/client/client.html",
                controller: 'ClientController as clientCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
