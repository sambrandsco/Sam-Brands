/* Loads the shared header and footer into every page.
   Put <div id="site-header"></div> where the header should go,
   and <div id="site-footer"></div> where the footer should go. */

function loadPartial(id, url) {
  var el = document.getElementById(id);
  if (!el) return;
  fetch(url)
    .then(function (res) { return res.text(); })
    .then(function (html) { el.innerHTML = html; })
    .catch(function () { /* fail quietly if offline */ });
}

document.addEventListener("DOMContentLoaded", function () {
  loadPartial("site-header", "/partials/header.html");
  loadPartial("site-footer", "/partials/footer.html");
});
