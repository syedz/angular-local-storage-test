angular
  .module('root', [
    'ui.router',
    'LocalStorageModule'
  ])
  .config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: './templates/root.html',
        controller: function($scope, localStorageService) {
          $scope.storageType = localStorageService.getStorageType();

          $scope.isSet = localStorageService.set(1, 'Test1');
          $scope.key1 = localStorageService.get(1);

          $scope.lsKeys = localStorageService.keys();
        }
      })
      .state('newPage', {
        url: '/newPage',
        templateUrl: './templates/newPage.html',
        controller: function($scope, localStorageService) {
          $scope.storageType = localStorageService.getStorageType();
          
          $scope.newKey = localStorageService.get(1);
          $scope.lsKeys = localStorageService.keys();
        }
      });

    $urlRouterProvider.otherwise('/');

    localStorageServiceProvider
      .setPrefix('testKey')
      .setStorageType('sessionStorage');
  });
