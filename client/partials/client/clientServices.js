
angular.module('hotel.clientService')
    .factory('clientService', clientService)
clientService.$inject = ['$http', '$location'];
function clientService($http, $location) {
    var vm = this;
    vm.afficher = afficher;
    vm.ajouter = ajouter;
    vm.modifier = modifier;
    vm.supprimer = supprimer;
    vm.afficherDernier=afficherDernier;
    vm.afficherParId=afficherParId;

    function afficher() {
        var url = '/client'
        return $http.get(url);
    }
     function afficherParId(client) {
        var url = '/client/'+client.id_client
        return $http.get(url);
    }
    function afficherDernier() {
        var url = '/clientLast'
        return $http.get(url);
    }
    function ajouter(newApprenat) {
        console.log('appelle methode HTTP POST ...');

        $http.post('/client', newApprenat)
            .then(function (response) {
                console.log('la reponse est ', response.data);
                $location.path("/reserv");
            });
    };
    function modifier(clien) {
        console.log('appelle methode HTTP PUT ...');

        $http.put('/client/' + clien.id_client, clien)
            .then(function (response) {

                console.log('la reponse est ', response.data);
            });
    };
    function supprimer(id) {
        console.log('appelle methode HTTP Delete ...');

        $http.delete('/client/' + id)
            .then(function (response) {
                console.log('la reponse est ', response.data);
            });
    };

    return vm;
}




