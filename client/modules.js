
angular.module('hotel.reservation', []); 
angular.module('hotel.client', []);
angular.module('hotel.clientService', []) ;
angular.module('hotel.reservationService', []) 
angular.module('hotel', ['hotel.reservation','hotel.client','hotel.clientService','hotel.reservationService', 'ngRoute']);
