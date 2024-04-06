const cart_container=document.getElementById("karty")
function generateCards() {
  try {
      const response = fetch('./spis filcaków.json').then(data=>
      data.json().map(animal => {
          makeCard(animal);
      }))
  } catch (error) {
      console.log(error);
  }
};

const makeCard = (animal) => {
  const cart = document.createElement("div");
  cart.classList.add("container1");
  const cartImage = document.createElement("img");
  cartImage.src = animal.url || "";
  cartImage.classList.add("obrazek");
  cart.appendChild(cartImage);
  const textbox = document.createElement("div");
  textbox.style.display = "flex";
  textbox.style.flexDirection = "column";
  textbox.style.gap = "1rem";
  const cartTitle = document.createElement("h3");
  cartTitle.innerText = animal.nazwa;
  textbox.appendChild(cartTitle);
  const description = document.createElement("p");
  description.innerText = animal.opis;
  textbox.appendChild(description);
  const textboxfooter = document.createElement("div");
  const prize = document.createElement("p");
  prize.classList.add("cena");
  textboxfooter.appendChild(prize);
  const plusbutton = document.createElement("button");
  plusbutton.type = "button";
  plusbutton.innerText = "+";
  plusbutton.style.borderRadius = "50%";
  plusbutton.style.background = "#846046";
  plusbutton.style.color = "white";
  textboxfooter.appendChild(plusbutton);
  textbox.appendChild(textboxfooter);
  cart.appendChild(textbox);
};
generateCards()