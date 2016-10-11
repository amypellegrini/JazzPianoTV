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
      .state('ii-v-i', {
        url: '/exercises/harmonic-progressions/II-V-I',
        templateUrl: 'pages/harmonic-progressions/ii-v-i.html'
      })
      .state('voicings', {
        url: '/exercises/voicings',
        templateUrl: 'pages/voicings/voicings.html'
      })
      .state('scales', {
        url: '/exercises/scales',
        templateUrl: 'pages/scales/scales.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'pages/products.html'
      })
      .state('crashCourse', {
        url: '/products/jazzpiano-crash-course',
        templateUrl: 'pages/jazzpiano-course/buy.html'
      })
      .state('proMembership', {
        url: '/products/pro-membership-subscription',
        templateUrl: 'pages/pro-membership/buy.html'
      });

    $locationProvider.html5Mode(true);
  });
