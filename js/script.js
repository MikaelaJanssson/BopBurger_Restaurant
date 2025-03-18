const hideBtn = document.getElementById("hide-btn"),
  lunchBuffeSection = document.getElementById("section-lunch");
function calculateTotal() {
  let e = parseInt(document.getElementById("mozarella").value) || 0,
    t = parseInt(document.getElementById("chickenRings").value) || 0,
    n = parseInt(document.getElementById("friesWithCheese").value) || 0,
    l = parseInt(document.getElementById("smashedToast").value) || 0,
    a = parseInt(document.getElementById("meatBurger").value) || 0,
    d = parseInt(document.getElementById("chickenBurger").value) || 0,
    u = parseInt(document.getElementById("texasBurger").value) || 0,
    i = parseInt(document.getElementById("goGreenBurger").value) || 0,
    c = parseInt(document.getElementById("brownieWithCream").value) || 0,
    o = parseInt(document.getElementById("oreoShake").value) || 0,
    r = parseInt(document.getElementById("iceCreamWithFries").value) || 0,
    y = parseInt(document.getElementById("bananaSplitFries").value) || 0,
    s = parseInt(document.getElementById("lunchBuffe").value) || 0,
    B = parseInt(document.getElementById("extra").value) || 0;
  document.getElementById("totalCost").textContent = +(
    59 * e +
    69 * t +
    159 * i +
    49 * n +
    59 * l +
    199 * a +
    159 * d +
    159 * u +
    99 * c +
    79 * o +
    79 * r +
    109 * y +
    109 * s +
    29 * B
  );
}
hideBtn.addEventListener("click", function () {
  "none" !== lunchBuffeSection.style.display
    ? ((lunchBuffeSection.style.display = "none"),
      (hideBtn.textContent = "Visa Lunchbuff\xe9"))
    : ((lunchBuffeSection.style.display = "block"),
      (hideBtn.textContent = "D\xf6lj Lunchbuff\xe9"));
}),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("category-filter"),
      t = document.querySelectorAll(".menu-card");
    e.addEventListener("change", function () {
      let n = e.value;
      t.forEach((e) => {
        let t = e.getAttribute("data-category");
        "all" === n || n === t
          ? (e.style.display = "block")
          : (e.style.display = "none");
      });
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll(".menu-card");
    e.forEach((e) => {
      e.addEventListener("click", function () {
        e.classList.toggle("flipped");
      });
    });
  });
