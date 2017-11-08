
angular.module('hotel.client')
    .controller('ClientController', ClientController);

ClientController.$inject = ['clientService'];

function ClientController(clientService) {
    var vm = this;
    vm.state = 'detail';
    vm.state2 = '';
    // vm.state3='update';
    vm.changeState = changeState;
    vm.changeState2 = changeState2;
    vm.afficher = afficher;
    vm.ajouterClient = ajouterClient;
    vm.init = init;
    vm.client = {};
    vm.clientNew = { "id_emp": "GHK1" };
    vm.modifierClient = modifierClient;
    vm.supprimerClient = supprimerClient;
    vm.update = update;
    vm.detail = detail;
    vm.charger = charger;
    vm.detail = detail;
    vm.clientDetail = {};

    function changeState(etat) {
        vm.state = etat;
    }

    function changeState2(etat2, client) {
        vm.clientDetail = angular.copy(client);
        vm.state2 = etat2;

    }
    function detail(etat2) {
        changeState2(etat2);

    }
    function afficher() {
        clientService.afficher().then(function (response) {
            vm.client = response.data;
        })
    }
    function ajouterClient(Newclient) {

        clientService.ajouter(Newclient);
        init();
        changeState('')
        console.log('ces données sont venu du template' + client)
    }
    function init() {
        vm.client = {};
    }

    function detail() {
        changeState('voir');
        afficher();

    }
    function update(client) {
        changeState('update');
        vm.client = angular.copy(client);

    }
    function modifierClient(client) {
        console.log('appel à la methode modifier client')
        clientService.modifier(client);

        afficher();
        init();
        changeState('detail');
    }
    function supprimerClient(client) {
        console.log('appel à la methode supprimer client')
        clientService.supprimer(client);
        afficher();
        console.log('ces données sont venu du template' + client)
    }
    function charger() {
        afficher();
        changeState('detail');
    }


    afficher();

}




