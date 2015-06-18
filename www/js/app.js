// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ctrl', function($scope, $cordovaContacts){

$scope.get = function(){
  console.log("hello.!");


  $cordovaContacts.find({filter: ''})
      .then(function(result){
        console.log(JSON.stringify(result));
        $scope.contacts = result;

         },function(err){
        console.log("Error" + err);
      });
      //console.log(arr);
}

$scope.selectContact = function(contact, index){
  console.log("Select contact called");
  var index = index + 1;
  var contact = contact;
$scope.data = contact;
$scope.data1 =index;
console.log('Index is =' + index);
console.log(contact);
}
})
