class ExerciseController {
  constructor($scope) {
    this.score = 0;
    this.path = './../media/voicings/357-735-573/a-c-amaj7.svg';
  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
