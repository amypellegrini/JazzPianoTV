angular
  .module('JazzPianoTV')
  .component('exercise', {
    templateUrl: 'components/exercise/exercise.html',
    controller: 'ExerciseController',
    controllerAs: 'exercise',
    bindings: {
      settings: '='
    }
  });
