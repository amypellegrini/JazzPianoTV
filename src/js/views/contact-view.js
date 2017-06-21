define([], function() {
  var ContactView = function(settings) {
    var
        contactBtn = settings.ui.contactBtn,
        contactForm = settings.ui.contactForm,
        contactSendBtn = settings.ui.contactSendBtn,

        hideContactForm = function(ev) {
          if (!ev || ev && ev.target === ev.currentTarget) {
            contactForm.addClass('visuallyhidden');
          }
        },

        showContactForm = function() {
          contactForm.removeClass('visuallyhidden');
        };

    contactBtn.on('click', showContactForm);
    contactForm.on('click', hideContactForm);
    contactForm.find('form').parsley();
  };

  return ContactView;
});
