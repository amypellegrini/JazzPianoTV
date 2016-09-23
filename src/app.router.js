angular
  .module('JazzPianoTV')
  .config(($stateProvider, $locationProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        //abstract: true,
        templateUrl: 'pages/home.html'
      });

    $locationProvider.html5Mode(true);
  });
