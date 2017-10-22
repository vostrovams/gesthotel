angular.module('httpMethodes', [])
    .controller('HttpMethodeController', ['$http', function ($http) {
        var vm = this;

        vm.get = function () {
            console.log('appelle methode HTTP GET ...');

            $http.get('/paiement')
                .then(function (response) {
                    console.log('la reponse est ', response.data);
                });
        };

        vm.post = function () {
            console.log('appelle methode HTTP POST ...');

            $http.post('/client', { nom: 'butalu', prenom: 'tressy', sexe: 'm', adresse: '20, avenue make', email: 'butalu@gmail.com', dateArrive: '2017-10-21', dateNais: '1970-03-2', fonction: 'technicine de support', phoneNumber: '+243895632147', villeProv: 'Paris', id_emp: 'GHK001' })
                .then(function (response) {
                    console.log('la reponse est ', response.data);
                });
        }

        vm.put = function () {
            console.log('appelle methode HTTP PUT ...');

            $http.put('/client/1', { nom: 'vambi', prenom: 'brunhel', sexe: 'm', adresse: '20, avenue kuntuala numero 20 Q/10 c/ndjili', email: 'voldyvambi@gmail.com', dateArrive: '2017-10-21', dateDepart: '2017-11-15', dateNais: '1970-03-2', fonction: 'ingenieur agronome', phoneNumber: '+243895632147', villeProv: 'Bruxelles', id_emp: 'GHK001' })
                .then(function (response) {
                    console.log('la reponse est ', response.data);
                });
        }

        vm.delete = function () {
            console.log('appelle methode HTTP DELETE ...');

            $http.delete('/client/1')
                .then(function (response) {
                    console.log('la reponse est ', response.data);
                });
        }

    }]);