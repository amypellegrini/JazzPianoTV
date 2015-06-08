var App = (function() {
  var contactBtn = document.getElementById('navContact'),
      contactForm = document.getElementById('contact'),
      contactSendBtn = document.getElementById('contactSend'),

      hideContactForm = function(ev) {
        if (ev && ev.target === ev.currentTarget) {
          ev.stopPropagation();
          contactForm.className = "email form overlay container hidden";
        } else if (!ev) {
          contactForm.className = "email form overlay container hidden";
        }
      },

      showContactForm = function() {
        contactForm.className = "email form overlay container";
      };

  contactBtn.addEventListener('click', showContactForm);
  contactForm.addEventListener('click', hideContactForm);
}());
