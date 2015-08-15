define(['views/exercise-view'], function(ExerciseView) {
  var DemoView = function(settings) {
    var
        $el = $(settings.el),
        $next,
        $current,
        $exercises,

        setCurrentExercise = function() {
          $exercises = $el.find('.exercise-container');
          $current = $exercises.first().addClass('current');
        },

        /**
         * Set DOM reference vars.
         */
        setUI = function() {
          $exercises = $el.find('.exercise-container');
          $next = $el.find('.next');

          setCurrentExercise();
        },

        /**
         * Initialize all exercises.
         */
        initExercises = function() {
          $exercises.each(function(i, exercise) {
            exercise.view = new ExerciseView({
              el: exercise
            });
          });
        },

        /**
         * Continue to next exercise.
         */
        nextExercise = function() {
          $current.remove();
          setCurrentExercise();
        },

        /**
         * DOM event handlers.
         */
        bindEvents = function() {
          $next.on('click', nextExercise);
        },

        /**
         * Initialize DemoView.
         */
        init = function() {
          setUI();
          bindEvents();

          return {};
        };

    return init();
  };

  return DemoView;
});
