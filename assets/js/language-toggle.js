(function () {
  var selected = localStorage.getItem('andy-language') || 'en';
  function applyLanguage(lang) {
    selected = lang === 'ko' ? 'ko' : 'en';
    document.documentElement.lang = selected;
    document.body.setAttribute('data-language', selected);
    localStorage.setItem('andy-language', selected);
    document.querySelectorAll('[data-set-lang]').forEach(function (button) {
      button.classList.toggle('is-active', button.getAttribute('data-set-lang') === selected);
    });
  }
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-set-lang]');
    if (button) applyLanguage(button.getAttribute('data-set-lang'));
    var menuLink = event.target.closest('.andy-drawer a');
    if (menuLink) {
      var menuToggle = document.getElementById('andy-menu-toggle');
      if (menuToggle) menuToggle.checked = false;
    }
  });
  applyLanguage(selected);
}());
