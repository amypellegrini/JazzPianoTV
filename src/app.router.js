angular
  .module('JazzPianoTV')
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'pages/home.html'
      });
  });
