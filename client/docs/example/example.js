/*global console: false */
/*jslint unparam: true*/

window.angular.module('exampleApp', [
  'angular-web-notification',
  'ui.bootstrap',
  'dialogs',
  'exampleApp.services'
  ]).controller('exampleForm', ['$scope', '$dialog', '$timeout','$http',function ($scope, $dialog,$timeout,$http) {
    'use strict';

    $scope.click = function(data){
      $scope.user.status = data
      console.log('gggg',data,  $scope.user.name, $scope.user.status)
    }

    $scope.title = new Date();
    $scope.text = 'Please click here to get your data';
    $scope.call = function () {

     $http({
      method: 'POST',
      async:false,
      url: '/sth',
      data:{
        Status:$scope.user.status,
        Name:$scope.user.name
      }
    })
     .then(function (res) {
      console.log('fucks')
      
    })
     .catch(function(error) {
      console.log(error)
    });
   }



 }]).directive('showButton', ['webNotification','$dialog', function (webNotification,$dialog) {
  'use strict';

  return {
    restrict: 'C',
    scope: {
      notificationTitle: '=',
      notificationText: '='
    },
    link: function (scope, element) {
      surprise();


            function hanan(){
              webNotification.showNotification("Emotional Notification" , {
                body: 'Please click her to fill out the form',
                icon: 'https://img.freepik.com/free-vector/yellow-background-with-expressive-faces_23-2147634255.jpg?size=338&ext=jpg',                
                onClick: function onNotificationClicked() {
                  console.log('Notification clicked.');
                  $dialog.dialog({}).open('modalContent.html')
                },
                    autoClose: 10000 //auto close the notification after 4 seconds (you can manually close it via hide function)
                  },function onShow(error, hide) {
                    if (error) {
                      window.alert('Unable to show notification: ' + error.message);
                      console.log(error.message)
                    } else {
                      console.log('Notification Shown.');

                      setTimeout(function hideNotification() {

                        console.log('Hiding notification....');
                            hide(); //manually close the notification (you can skip this if you use the autoClose option)
                          }, 5000);
                    }
                  });
           // });
         }
            // to here before updating on time if statment,,,>>>>>>
            function surprise() {
              (function loop() {

                var now = new Date();
                console.log(now.getHours())
                if(now.getHours() === 17){
                    // if ( (now.getHours() === 11 && now.getMinutes()===0) || (now.getHours() === 15 && now.getMinutes()===0 ) ) {
                      hanan();
                    }
                     now = new Date();                  // allow for time passing
                     var delay = 60000 - (now % 60000); // exact ms to next minute interval
                     setTimeout(loop, 30000);
                   })();
                 }

               }
             };
           }])
