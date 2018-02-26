app.controller('ValueController', function($scope, $routeParams, $http,ValueService) {
    $scope.pageName = 'Values';
    $scope.values = ValueService.list();
    

});