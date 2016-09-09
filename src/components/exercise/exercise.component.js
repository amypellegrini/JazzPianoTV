angular
  .module('JazzPianoTV')
  .component('exercise', {
    templateUrl: 'components/exercise/exercise.html',
    controller: 'ExerciseController',
    controllerAs: 'vm',
    scope: {
      path: '='
    }
  });
