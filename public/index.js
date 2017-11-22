const app = angular.module('main', []);

//Create the controller
const myController = function($scope, $http) {
  const handleResponse = response => {
    $scope.user = response.data;
    $scope.error = '';
    $http.get($scope.user.repos_url).then(onRepos, handleError);
    console.log('FFF');
  };

  const handleError = error => {
    console.log(error);
    $scope.error = 'there is an error';
  };

  const onRepos = response => {
    $scope.repos = response.data;
    console.log($scope.repos);
  };

  $scope.search = function() {
    $http
      .get(`https://api.github.com/users/${$scope.username}`)
      .then(response => {
        handleResponse(response, handleError);
      });
  };
  $scope.message = 'Hola!';
};
//Register controller with module
app.controller('myController', ['$scope', '$http', myController]);
