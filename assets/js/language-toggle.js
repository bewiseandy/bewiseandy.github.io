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
    if (button) {
      var requested = button.getAttribute('data-set-lang');
      var detail = document.querySelector('.lab-article[data-page-lang][data-alt-url]');
      if (detail && requested !== detail.getAttribute('data-page-lang')) {
        window.location.href = detail.getAttribute('data-alt-url');
        return;
      }
      applyLanguage(requested);
    }
    var menuLink = event.target.closest('.andy-drawer a');
    if (menuLink) {
      var menuToggle = document.getElementById('andy-menu-toggle');
      if (menuToggle) menuToggle.checked = false;
    }
  });
  var detailPage = document.querySelector('.lab-article[data-page-lang]');
  applyLanguage(detailPage ? detailPage.getAttribute('data-page-lang') : selected);
}());
