'use strict';

angular.module('MyApp', ['ngMaterial'])

.controller('MainCtrl', function($scope, $mdSidenav, $mdDialog, $mdBottomSheet){
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
   $scope.isOpen = false;
   $scope.tool = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
  };
   // START Add Contact
   $scope.addContact = function() {
     var contact = $scope.contact;
     $scope.contacts.push({
       face: imagePath,
       phone: contact.phone,
       who: contact.name,
       notes: contact.notes
     })
     $scope.contact.name = '';
     $scope.contact.phone = '';
     $scope.contact.notes = '';
     $scope.new_contact.$setPristine();
     angular.element(document.querySelector('#nameInput').focus())
   }
   // END Add Contact
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
    // END Contacts

    // START Dialogs
    $scope.showHome = function() {
       $mdDialog.show({
          clickOutsideToClose: true,
          scope: $scope,
          preserveScope: true,
          template: '<md-dialog>' +
                    '  <md-dialog-content>' +
                    '     <p>Hey we have a nice dialog here!!!</p>' +
                    "     <p>You're already on the home page</p>" +
                    '  </md-dialog-content>' +
                    '</md-dialog>',
          controller: function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            }
          }
       });
    }
    $scope.showAbout = function() {
       $mdDialog.show({
          clickOutsideToClose: true,
          scope: $scope,
          preserveScope: true,
          template: '<md-dialog>' +
                    '  <md-dialog-content>' +
                    '     <p>Hey we have a nice dialog here!!!</p>' +
                    '     <p>This app was built to organize our contacts</p>' +
                    '  </md-dialog-content>' +
                    '</md-dialog>',
          controller: function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            }
          }
       });
    }
    // END Dialogs
    // START Bottom Sheet
    $scope.showContacts = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>' +
      '     <p>Hey we have a nice bottom sheet here!!!</p>' +
      '     <p>We currently have {{contacts.length}} contacts</p>' +
      '</md-bottom-sheet>'
    });
  };
  // END Bottom Sheet
});
