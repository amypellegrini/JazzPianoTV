class VoicingsController {
  constructor() {
    this.settings = {
      title: 'Voicings'
    };
  }
}

angular
  .module('JazzPianoTV')
  .controller('VoicingsController', VoicingsController);