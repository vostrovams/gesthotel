angular.module('httpMethodes', ['finance'])
    .controller('HttpMethodeController', ['convertisseurMonnaie', function HttpMethodeController (convertisseurMonnaie) {

     var get=function(){
         convertisseurMonnaie.afficher();
     }
    }]);