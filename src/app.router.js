angular
  .module('JazzPianoTV')
  .config(($stateProvider, $locationProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        //abstract: true,
        templateUrl: 'pages/home.html'
      })
      .state('exercises', {
        url: '/exercises',
        templateUrl: 'pages/exercises.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html'
      });

    $locationProvider.html5Mode(true);
  });
