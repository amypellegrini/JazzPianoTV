class VoicingsController {
  constructor() {
    this.settings = {
      title: 'Voicings',
      sounds: [
        'https://s3.amazonaws.com/jazzpiano.tv/audio/raw/20161003/ZOOM0001.WAV',
      ]
    };
  }
}

angular
  .module('JazzPianoTV')
  .controller('VoicingsController', VoicingsController);