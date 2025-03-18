window.onload = function () {
  // Hämta parametrarna
  const parameter = new URLSearchParams(window.location.search);

  // Fyll i bokning på bekräftelsesidan
  document.getElementById("user-name").textContent = parameter.get("name");
  document.getElementById("user-date").textContent = parameter.get("date");
  document.getElementById("user-time").textContent = parameter.get("time");
  document.getElementById("user-guests").textContent = parameter.get("guests");
};

function validateForm() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  // Kontrollerar att alla fält är ifyllda
  if (!name || !date || !time || !guests) {
    alert("Vänligen fyll i alla fält.");
    return false; // Stoppar formuläret från att skickas om false
  }
  return true; // Formuläret skickas om alla fält är ifyllda
}
