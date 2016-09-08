angular
  .module('JazzPianoTV')
  .component('tempoGauge', {
    controller: 'TempoGaugeController',
    scope: {
      tempo: '='
    }
  });