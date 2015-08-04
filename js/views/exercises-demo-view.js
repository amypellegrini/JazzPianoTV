(function(argument) {
  var exercisesDemoView = function(settings) {
    var
        $el = $(settings.el),
        $exercises = $el.find('.exercises');

    return {};
  };

  return new exercisesDemoView({
    el: $('.exercise-flow-container')
  });
})();
