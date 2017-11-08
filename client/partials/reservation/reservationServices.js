
angular.module('hotel.reservationService')
    .factory('reservationService', reservationService)
clientService.$inject = ['$http', '$location'];
function reservationService($http, $location) {
    var vm = this;
  
    vm.ajouter = ajouter;
    vm.modifier = modifier;
    vm.supprimer = supprimer;


    function ajouter() {
        console.log('appelle methode HTTP POST ...');

        $http.post()
            .then(function (response) {
                console.log('la reponse est ', response.data);

            });
    };
    function modifier(clien) {
        console.log('appelle methode HTTP PUT ...');

        $http.put()
            .then(function (response) {

                console.log('la reponse est ', response.data);
            });
    };
    function supprimer(id) {
        console.log('appelle methode HTTP Delete ...');

        $http.delete()
            .then(function (response) {
                console.log('la reponse est ', response.data);
            });
    };

    return vm;
}




