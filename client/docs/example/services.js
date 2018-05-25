angular.module('exampleApp.services', [])
.factory('Note' ,function ($http, $location, $window) {
  console.log("TERST")
  var submitIfno = function (name,status) {
    console.log('hhhh')
    return $http({
      method: 'POST',
      url: '/sth',
      data:{ name:name,status:status}
    })
    .then(function (resp) {
      // return resp.data.token;
      console.log('fucks')
      return resp;
    });
  };
  return {
    submitIfno : submitIfno
  };
});
