// MENU-SIDA STARTAR
// Hämta referenser till knappen och lunchbuffé-sektionen
const hideBtn = document.getElementById("hide-btn");
const lunchBuffeSection = document.getElementById("section-lunch");

// Lägg till en eventlyssnare på knappen som döljer lunchbuffé-sektionen
hideBtn.addEventListener("click", function () {
  // Om sektionen är synlig, döljer vi den
  if (lunchBuffeSection.style.display !== "none") {
    lunchBuffeSection.style.display = "none";
    hideBtn.textContent = "Visa Lunchbuffé";
  } else {
    lunchBuffeSection.style.display = "block"; // Visar sektionen igen
    hideBtn.textContent = "Dölj Lunchbuffé";
  }
});

//MENU-SIDA SLUTAR

//FILTRERING AV KATEGORI STARTS

document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.getElementById("category-filter");
  const menuCards = document.querySelectorAll(".menu-card");

  filterSelect.addEventListener("change", function () {
    const selectedCategory = filterSelect.value;

    menuCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === category) {
        card.style.display = "block"; // Visa kortet
      } else {
        card.style.display = "none"; // Dölj kortet
      }
    });
  });
});

//FILTRERING AV KATEGORI ENDS

/*FLIP CARD STARTS */
document.addEventListener("DOMContentLoaded", function () {
  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
});

/*FLIP CARD ENDS*/

/*BERÄKNING AV TOTALKOSTNAD BESTÄLLNING STARTS*/
function calculateTotal() {
  // Hämtar värdena för antalet beställda rätter
  const mozarellaCount =
    parseInt(document.getElementById("mozarella").value) || 0;
  const chickenRingsCount =
    parseInt(document.getElementById("chickenRings").value) || 0;
  const friesWithCheeseCount =
    parseInt(document.getElementById("friesWithCheese").value) || 0;
  const smashedToastCount =
    parseInt(document.getElementById("smashedToast").value) || 0;
  const meatBurgerCount =
    parseInt(document.getElementById("meatBurger").value) || 0;
  const chickenBurgerCount =
    parseInt(document.getElementById("chickenBurger").value) || 0;
  const texasBurgerCount =
    parseInt(document.getElementById("texasBurger").value) || 0;
  const GoGreenBurgerCount =
    parseInt(document.getElementById("goGreenBurger").value) || 0;
  const brownieWithCreamCount =
    parseInt(document.getElementById("brownieWithCream").value) || 0;
  const oreoShakeCount =
    parseInt(document.getElementById("oreoShake").value) || 0;
  const iceCreamWithFriesCount =
    parseInt(document.getElementById("iceCreamWithFries").value) || 0;
  const bananaSplitFriesCount =
    parseInt(document.getElementById("bananaSplitFries").value) || 0;
  const lunchBuffeCount =
    parseInt(document.getElementById("lunchBuffe").value) || 0;
  const extraCount = parseInt(document.getElementById("extra").value) || 0;

  // Priser för rätterna
  const mozarellaPrice = 59;
  const chickenRingsPrice = 69;
  const friesWithCheesePrice = 49;
  const smashedToastPrice = 59;
  const meatBurgerPrice = 199;
  const chickenBurgerPrice = 159;
  const GoGreenBurgerPrice = 159;
  const texasBurgerPrice = 159;
  const brownieWithCreamPrice = 99;
  const oreoShakePrice = 79;
  const iceCreamWithFriesPrice = 79;
  const bananaSplitFriesPrice = 109;
  const lunchBuffePrice = 109;
  const extraPrice = 29;

  // Beräknar totalkostnaden
  const totalCost =
    mozarellaCount * mozarellaPrice +
    chickenRingsCount * chickenRingsPrice +
    GoGreenBurgerCount * GoGreenBurgerPrice +
    friesWithCheeseCount * friesWithCheesePrice +
    smashedToastCount * smashedToastPrice +
    meatBurgerCount * meatBurgerPrice +
    chickenBurgerCount * chickenBurgerPrice +
    texasBurgerCount * texasBurgerPrice +
    brownieWithCreamCount * brownieWithCreamPrice +
    oreoShakeCount * oreoShakePrice +
    iceCreamWithFriesCount * iceCreamWithFriesPrice +
    bananaSplitFriesCount * bananaSplitFriesPrice +
    lunchBuffeCount * lunchBuffePrice +
    extraCount * extraPrice;

  // Visar den totala kostnaden i HTML
  document.getElementById("totalCost").textContent = +totalCost;
}

/*BERÄKNING AV TOTALKOSTNAD BESTÄLLNING ENDS*/
