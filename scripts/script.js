const page = document.querySelector(".page");
const edditButton = document.querySelector(".profile__information-button1");
const popup = document.querySelector(".popup");
const closePopUpButton = document.querySelector(".popup-close");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-about");
const profileName = document.querySelector(".profile__information-name--size1");
const profileAbout = document.querySelector(".profile__information-name--size2");
const formElement = document.querySelector(".popup__form");
const elementsContainer = document.querySelector(".elements__container");

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

window.addEventListener('load', function() {
    const elementTemplate = document.querySelector("#item-template").content;
    initialCards.forEach( function (card) {
        const element = elementTemplate.querySelector(".elements__item").cloneNode(true);
        element.querySelector(".elements__item-img").src = card.link;
        element.querySelector(".elements__item-img").alt = "Imagen de referencia del lugar " + card.name ;
        element.querySelector(".elements__item-name").textContent = card.name;
        elementsContainer.append(element);
    });
});

function openEditForm() {
    popup.classList.add("popup_opened");
    nameInput.value =  profileName.textContent;
    jobInput.value = profileAbout.textContent;
    page.style.opacity = 0.4;
    page.style.pointerEvents = "none";
}

function closeEditForm() {
    popup.classList.remove("popup_opened");
    page.style.opacity = 1;
    page.style.pointerEvents = "auto";
}


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
}


edditButton.addEventListener("click", openEditForm);

closePopUpButton.addEventListener("click", closeEditForm);

formElement.addEventListener('submit', handleProfileFormSubmit);