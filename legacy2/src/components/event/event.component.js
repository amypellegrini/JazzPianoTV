angular
  .module('JazzPianoTV')
  .component('event', {
    templateUrl: 'components/event/event.html',
    controller: 'EventController',
    scope: {
      date: '=',
      location: '=',
      imageUrl: '=',
      description: '='
    }
  });
