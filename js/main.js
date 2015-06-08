var App = (function() {
  var contactBtn = document.getElementById('navContact'),
      contactForm = document.getElementById('contact'),

      hideContactForm = function(ev) {
        ev.stopPropagation();

        if (ev.target === ev.currentTarget) {
          contactForm.className = "email form overlay container hidden";
        }
      },

      showContactForm = function() {
        contactForm.className = "email form overlay container";
      };

  contactBtn.addEventListener('click', showContactForm);
  contactForm.addEventListener('click', hideContactForm);
}());
