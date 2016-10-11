class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/assets/';

    this.settings = $scope.exercise.settings;

    this.score = 0;
    this.playbackStatus = 'stopped';

    console.log($scope);

    if (this.settings.sounds) {
      this.preloadSounds();
    }
  }

  preloadSounds() {
    let self = this;

    this.sounds = [];

    this.settings.sounds.forEach(function(sound) {
      this.sounds.push(new Howl({
        src: [ sound ]
      }))
    }, this);

    console.log(this.sounds);
  }

  /**
   * This must happen when navigating out to avoid memory leaks.
   */
  unloadSounds() {

  }

  play() {
    if (this.playbackStatus !== 'playing') {
      this.playbackStatus = 'playing';
      this.sounds[0].play();
    }
  }

  pause() {

  }

  stop() {

  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
