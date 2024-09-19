// Selectors General
const page = document.querySelector(".page");

// Selectos profile
const edditButton = document.querySelector(".profile__information-button1");
const profileName = document.querySelector(".profile__information-name--size1");
const profileAbout = document.querySelector(".profile__information-name--size2");

// Selector Cards
const cardsContainer = document.querySelector(".cards__container");
const cardTemplate = document.querySelector("#card-template").content;
const profileButton = document.querySelector(".profile__button");

// Selectors form
const popup = document.querySelector(".popup");
const closePopUpButton = document.querySelector(".popup-close");
const firstInput = document.querySelector(".popup__form-first");
const secondInput = document.querySelector(".popup__form-second");
const formElement = document.querySelector(".popup__form");
const popupFormTitle = document.querySelector(".popup__form-title");
const popupFormButton = document.querySelector(".popup__form-button");


const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];

function createCard (card, newCard = false) {
  const cardAux = cardTemplate.querySelector(".cards__item").cloneNode(true);
  switch (newCard) {
    case false:
      cardAux.querySelector(".cards__item-img").src = card.link;
      cardAux.querySelector(".cards__item-img").alt = "Imagen de referencia del lugar " + card.name ;
      cardAux.querySelector(".cards__item-name").textContent = card.name;  
      addDeleteTrashButton(cardAux);       
      break;
    case true:
      cardAux.querySelector(".cards__item-img").src = secondInput.value;
      cardAux.querySelector(".cards__item-img").alt = "Imagen de referencia del lugar " + firstInput.value;
      cardAux.querySelector(".cards__item-name").textContent = firstInput.value;
      addDeleteTrashButton(cardAux); 
      break;   
  }
   return cardAux;
}

function addToggleLikeButton(cardTemplate) {
  cardTemplate.querySelector(".cards__item-button").addEventListener("click", function(evt) {
    evt.target.classList.toggle("cards__item-button_active");
    });
}

function addDeleteTrashButton(card) {
  let buttonTrash = card.querySelector(".cards__item-delete");
      buttonTrash.addEventListener("click", () => {
        let cardAuxContainer = buttonTrash.parentElement;
        cardAuxContainer.remove();
      });
}

initialCards.forEach(function (card) {
    let cardAux = createCard(card, false);
    addToggleLikeButton(cardAux);
    cardsContainer.append(cardAux);
});

function openEditForm(evt) {
  switch (evt.currentTarget.className) {
    case 'profile__information-button1':
      popupFormTitle.textContent = "Editar Perfil";
      popupFormButton.textContent = "Guardar";
      firstInput.placeholder = "Nombre";
      secondInput.placeholder = "Acerca de mi";
      firstInput.value =  profileName.textContent;
      secondInput.value = profileAbout.textContent;
      break;
    case 'profile__button':
      popupFormTitle.textContent = "Nuevo lugar";
      popupFormButton.textContent = "Crear";
      firstInput.placeholder = "Título";
      secondInput.placeholder = "Enlace a la imagen";
      break;
  }
    popup.classList.add("popup_opened");
    page.style.opacity = 0.4;
    page.style.pointerEvents = "none";
}

function closeEditForm() {
    popup.classList.remove("popup_opened");
    page.style.opacity = 1;
    page.style.pointerEvents = "auto";
    firstInput.value = "";
    secondInput.value = "";
}


function handleFormSubmit(evt) {

  switch (evt.target[2].innerText) {
    case "Guardar":
      profileName.textContent = firstInput.value;
      profileAbout.textContent = secondInput.value;
      break;
    case "Crear":
      let cardAux = createCard(null, true)
      addToggleLikeButton(cardAux);
      cardsContainer.prepend(cardAux);
      closeEditForm();
      break;
  }
    evt.preventDefault();
}

edditButton.addEventListener("click", openEditForm);

closePopUpButton.addEventListener("click", closeEditForm);

formElement.addEventListener('submit', handleFormSubmit);

profileButton.addEventListener("click", openEditForm);