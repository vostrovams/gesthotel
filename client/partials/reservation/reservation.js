
angular.module('hotel.reservation')
    .controller('ReservationController', ReservationController);

ReservationController.$inject = ['reservationService', 'clientService'];
function ReservationController(reservationService, clientService) {
    var vm = this;
    vm.state = 'create';
    vm.state2 = '';
    vm.changeState = changeState;
    vm.changeState2 = changeState2;
    vm.dernierClients = {};
    vm.afficherLast = afficherLast;
    vm.client = {};
    vm.clients = {};
    vm.afficherToutClient = afficherToutClient;

    function afficherLast() {
        clientService.afficherDernier().then(function (response) {
            vm.client = response.data;
            console.log('le dernier client est ' + vm.client);
        })
    }
    function afficherToutClient() {
        clientService.afficher().then(function (response) {
            vm.clients = response.data;
        });

    }
    function changeState(etat) {
        afficherToutClient();
        vm.state = etat;

        console.log('cava');
    }
    function changeState2(etat2) {
        vm.state2 = etat2;
    }
    afficherLast();
    afficherToutClient();

}