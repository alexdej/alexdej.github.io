// Keeps the address out of the page source. It appears only on a click, as
// text too, for visitors with no mail app set up, or when the page is
// printed. Without scripts the link goes to LinkedIn.
function revealEmail(link) {
  var address = atob("YWRlamFybmF0dEBnbWFpbC5jb20=");
  link.href = "mailto:" + address;
  link.textContent = address;
}

document.addEventListener("click", function (event) {
  var link = event.target.closest("a.email");
  if (link) revealEmail(link);
});

window.addEventListener("beforeprint", function () {
  document.querySelectorAll("a.email").forEach(revealEmail);
});
