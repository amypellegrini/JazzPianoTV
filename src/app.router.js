angular
  .module('JazzPianoTV')
  .config(($stateProvider, $locationProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'pages/home.html'
      })
      .state('exercises', {
        url: '/exercises',
        templateUrl: 'pages/exercises.html'
      })
      .state('harmonicProgressions', {
        url: '/exercises/harmonic-progressions',
        templateUrl: 'pages/harmonic-progressions/harmonic-progressions.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'pages/products.html'
      });

    $locationProvider.html5Mode(true);
  });
