// Keeps the address out of the page source. It appears only on a click, as
// text too, for visitors with no mail app set up. Without scripts the link
// goes to LinkedIn.
document.addEventListener("click", function (event) {
  var link = event.target.closest("a.email");
  if (!link) return;
  var address = atob("YWRlamFybmF0dEBnbWFpbC5jb20=");
  link.href = "mailto:" + address;
  link.textContent = address;
});
