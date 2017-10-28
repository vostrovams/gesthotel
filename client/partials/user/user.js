angular.module('hotel.user')
.controller('UserController', UserController);

UserController.$inject = [];

function UserController ($location) {
    var vm = this;

    vm.changeState = changeState;

    function changeState (state){
        vm.state = state;
    }

}