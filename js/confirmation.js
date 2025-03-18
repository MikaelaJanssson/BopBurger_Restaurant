window.onload = function () {
  let e = new URLSearchParams(window.location.search);
  (document.getElementById("user-name").textContent = e.get("name")),
    (document.getElementById("user-date").textContent = e.get("date")),
    (document.getElementById("user-time").textContent = e.get("time")),
    (document.getElementById("user-guests").textContent = e.get("guests"));
};
function validateForm() {
  let e = document.getElementById("name").value,
    t = document.getElementById("date").value,
    n = document.getElementById("time").value,
    l = document.getElementById("guests").value;
  return (
    (!!e && !!t && !!n && !!l) || (alert("Vänligen fyll i alla fält."), !1)
  );
}
