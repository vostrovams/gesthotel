angular.module('hotel.client')
    .controller('clientController', clientController);

clientController.$inject = ['$http', '$location'];


function clientController($http, $location) {

    var vm = this;
    vm.get = get;
    vm.changeState = changeState;

    function changeState(state) {
        vm.state = state;
    }

    function get() {
        console.log('appelle methode HTTP GET ...');

        $http.get('/categories/1')
            .then(function (response) {
                console.log('la reponse est ', response.data);
            });
    };

}
