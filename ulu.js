const animals = {
  "zabawki": [
    {
      "url": "assets/IMG_1579.jpg",
      "nazwa": "Osiołek",
      "cena": "5zł",
      "opis": "Ten malutki uroczy osiołek tylko czeka by trafić do potrzebującego dziecka! Jego malutkie rozmiary dają mu moc tulenia i pocieszania w każdym momencie ;)"
    },
    {
      "nazwa": "Flaming",
      "cena": "5zł",
      "opis": "Flamingo! Oto najprawdziwszy, niesamowity amulecik szczęścia. Każde dziecko już zawsze będzie przy nim widzieć świat przez różowe okulary!"
    },
    {
      "nazwa": "Dziobak",
      "cena": "1zł",
      "opis": "Czy jest śmieszniejsze zwierzątko na tym świecie? Poleca się każdemu, kto pragnie podarować ogromną dawkę dobrego humoru!"
    },
    {
      "nazwa": "Panda",
      "cena": "1zł",
      "opis": "Urocza, przesłodka i wierna przyjaciółka. Idealna dla śpiochów :) PS: możliwe różne kolory po kontakcie!"
    },
    {
      "nazwa": "Reniferek",
      "cena": "2zł",
      "opis": "Każdy powinien móc obchodzić święta:) każdy zasługuje na świąteczny prezencik. Dlatego reniferek to specjalna sezonowa niespodzianka!"
    },
    {
      "nazwa": "BB-8",
      "cena": "2zł",
      "opis": "Niech moc będzie z tobą! Ten malutki droid marzy aż ktoś pomoże mu spełnić jego największą misję - pomóc potrzebującym dzieciom!"
    },
    {
      "nazwa": "Leniwiec",
      "cena": "1zł",
      "opis": "Kto ma ochotę poleniuchować?? A przecież każdy wie, że najlepiej się relaksuje i odpoczywa w dobrym towarzystwie!"
    },
    {
      "nazwa": "Mors",
      "cena": "1zł",
      "opis": "Czy na lądzie czy pod wodą, zawsze służy pomocą. Chociaż ma ogromne kły, to w ogóle nie jest zły!"
    },
    {
      "nazwa": "Bóbr",
      "cena": "1zł",
      "opis": "Największy przyjaciel Morsa:) Niektórzy twierdzą, że wręcz bliźniak:) I w sumie mają rację. Tak samo jak on kocha dzieci!"
    },
    {
      "nazwa": "Krokodyl",
      "cena": "2zł",
      "opis": "Uwielbia kłapać paszczą:) ale tylko w pozytywnym sensie. Kto by nie chciał mieć takiego małego przyjaciela, który zawsze wie co powiedzieć?"
    },
    {
      "nazwa": "Miś",
      "cena": "1zł",
      "opis": "Dla swojego właściciela jest przytulaśny i milutki, ale dla wrogów potrafi pokazać pazur! Nie może się doczekać walki ze złymi snami:)"
    },
    {
      "nazwa": "Lew",
      "cena": "1zł",
      "opis": "Niesamowity obrońca i wierny towarzysz! Niemalże niezastąpiony amulet odwagi i siły:)"
    },
    {
      "nazwa": "Koala",
      "cena": "1zł",
      "opis": "Lubi jeść, spać i serduszko skraść! Mała urocza czeka na dzieciaczka którego będzie mogła w końcu uszczęśliwić :)"
    },
    {
      "nazwa": "Pingwinek",
      "cena": "5zł",
      "opis": "Kolejna niesamowita edycja: ŚWIĘTA! Oto uroczy pingwinek prosto z bieguna północnego! Lub południowego, kto by tam patrzył :)"
    },
    {
      "nazwa": "Stich",
      "cena": "2zł",
      "opis": "Kto był dzieckiem ten wie, że mordki Sticha się nie zapomina. Zabawny, uroczy i piękny nie może się doczekać aż podaruje komuś uśmiech:)"
    },
    {
      "nazwa": "Grinch",
      "cena": "2zł",
      "opis": "Pół świąteczny, pół filmowy, wszystkim dobrze znany Grinch! Ale dzieciaki nie mają się co przejmować, ten jest wyjątkowo otwarty i baaardzo przyjacielski. Poszukuje bratniej duszy:)"
    },
    {
      "nazwa": "Lisek",
      "cena": "2zł",
      "opis": "Lisek, który kradnie, ale serduszka:) Nikt jak on nie potrafi chytrze wywołać uśmiech na twarzy i zyskanie przyjaciela na zawsze!"
    },
    {
      "nazwa": "Myszka",
      "cena": "1zł",
      "opis": "O myszce można powiedzieć wszystko, oprócz tego że jest szkodnikiem! To najprawdziwszy słodziak:) Myślę, że ten gryzoń każdemu umie poprawić humor!"
    },
    {
      "nazwa": "Mopsik",
      "cena": "1zł",
      "opis": "Mopsik Klopsik, tak samo kocha klopsy jak i dzieci! Wymaga tylko tulenia, miłości i uśmiechu!"
    }
  ]
}


const cart_container=document.getElementById("karty")

function generateCards() {
  animals.zabawki.forEach((animal) => {
    makeCard(animal);
  });
};

const makeCard = (animal) => {
  const cart = document.createElement("div");
  cart.classList.add("card");
  const cartImage = document.createElement("img");
  cartImage.src = animal.url || "";
  cartImage.classList.add("obrazek");
  cart.appendChild(cartImage);
  const textbox = document.createElement("div");
  textbox.style.display = "flex";
  textbox.style.flexDirection = "column";
  textbox.style.gap = "1rem";
  textbox.style.height = "100%";
  textbox.style.justifyContent="space-between";
  const cartTitle = document.createElement("h3");
  cartTitle.innerText = animal.nazwa;
  textbox.appendChild(cartTitle);
  const description = document.createElement("p");
  description.innerText = animal.opis;
  textbox.appendChild(description);
  const textboxfooter = document.createElement("div");
  const prize = document.createElement("div");
  prize.classList.add("cena");
  textboxfooter.appendChild(prize);
  const priceText = document.createElement("p");
  priceText.innerText = animal.cena;
  prize.appendChild(priceText);
  const plusbutton = document.createElement("button");
  plusbutton.type = "button";
  plusbutton.innerText = "+";
  plusbutton.style.borderRadius = "50%";
  plusbutton.style.background = "#846046";
  plusbutton.style.color = "white";
  plusbutton.style.height = "2rem";
  plusbutton.style.width = "2rem";
  plusbutton.style.display = "flex";
  plusbutton.style.justifyContent = "center";
  plusbutton.style.alignItems = "center";
  plusbutton.style.fontSize = "1rem";
  plusbutton.style.border = "none";
  prize.appendChild(plusbutton);
  textbox.appendChild(textboxfooter);
  cart.appendChild(textbox);
  cart_container.appendChild(cart);
};

generateCards()