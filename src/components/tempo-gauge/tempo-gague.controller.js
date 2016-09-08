class TempoGaugeController {

  /**
   * @param {Object} context Context for gauge to be rendered.
   * @contstructor
   */
  constructor($element) {
      this.arc = d3.arc();

      this.arc({
        context: $element[0],
        innerRadius: 0,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2
      });
  }
}

angular
  .module('JazzPianoTV')
  .controller('TempoGaugeController', TempoGaugeController);
