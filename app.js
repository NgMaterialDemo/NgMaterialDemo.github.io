(function() {
'use strict';

angular.module('MyApp', ['ngMaterial'])

.controller('MainCtrl', function($scope, $mdSidenav){
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
   $scope.isOpen = false;
   $scope.tool = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
  };

  var imagePath = 'https://image.freepik.com/free-vector/vector-user-avatar-icon_279-10313.jpg';
    $scope.contacts = [{
      face : imagePath,
      phone: '561-123-4567',
      who: 'Fiona Glenanne',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      phone: '561-123-4567',
      who: 'Michael Westen',
      notes: " I'll be spying on you"
    }, {
      face : imagePath,
      phone: '561-123-4567',
      who: 'Sterling Archer',
      notes: "Phrasing Boom!"
    }, {
      face : imagePath,
      phone: '561-123-4567',
      who: 'Lana Kane',
      notes: " Seriously Archer?!"
    }, {
      face : imagePath,
      phone: '561-123-4567',
      who: 'Peter Griffin',
      notes: " Hey Brian get over here"
    }];
});
})();
