class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/assets/';

    this.score = 0;

    this.sequence = [
      {
        key: 'C',
        chord: 'Cmaj7',
        tempo: 60,
        timeSignature: 'C',
        rh: rootUrl + 'voicings/c-c-cmaj7.svg',
        lh: rootUrl + 'left-hand/c-c-c.svg',
        hFunction: 'I'
      },
      {
        key: 'C',
        chord: 'Dm7',
        tempo: 60,
        timeSignature: 'C',
        rh: rootUrl + 'voicings/c-c-dm7.svg',
        lh: rootUrl + 'left-hand/c-c-d.svg',
        hFunction: 'II'
      },
      {
        key: 'C',
        chord: 'G7',
        tempo: 60,
        timeSignature: 'C',
        rh: rootUrl + 'voicings/c-c-g7.svg',
        lh: rootUrl + 'left-hand/c-c-g.svg',
        hFunction: 'V'
      }
    ];
  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
