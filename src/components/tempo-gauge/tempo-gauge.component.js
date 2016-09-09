angular
  .module('JazzPianoTV')
  .component('tempoGauge', {
    templateUrl: 'components/tempo-gauge/tempo-gauge.html',
    controller: 'TempoGaugeController',
    scope: {
      tempo: '='
    }
  });