const page = document.querySelector(".page");
const edditButton = document.querySelector(".profile__information-button1");
const popup = document.querySelector(".popup");
const closePopUpButton = document.querySelector(".popup-close");
const firstInput = document.querySelector(".popup__form-first");
const secondInput = document.querySelector(".popup__form-second");
const profileName = document.querySelector(".profile__information-name--size1");
const profileAbout = document.querySelector(".profile__information-name--size2");
const formElement = document.querySelector(".popup__form");
const elementsContainer = document.querySelector(".elements__container");
const popupFormTitle = document.querySelector(".popup__form-title");
const popupFormButton = document.querySelector(".popup__form-button");
const profileButton = document.querySelector(".profile__button");
const elementTemplate = document.querySelector("#item-template").content;


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
    initialCards.forEach( function (card) {
        const element = elementTemplate.querySelector(".elements__item").cloneNode(true);
        element.querySelector(".elements__item-img").src = card.link;
        element.querySelector(".elements__item-img").alt = "Imagen de referencia del lugar " + card.name ;
        element.querySelector(".elements__item-name").textContent = card.name;
        elementsContainer.append(element);
        element.querySelector(".elements__item-button").addEventListener("click", function(evt) {
        evt.target.classList.toggle("elements__item-button_active");
        });
    });
});

function openEditForm(evt) {
    if (evt.currentTarget.className === 'profile__information-button1')
    {
      popupFormTitle.textContent = "Editar Perfil";
      popupFormButton.textContent = "Guardar";
      firstInput.placeholder = "Nombre";
      secondInput.placeholder = "Acerca de mi";
      firstInput.value =  profileName.textContent;
      secondInput.value = profileAbout.textContent;
    } else if (evt.currentTarget.className === 'profile__button') {
      popupFormTitle.textContent = "Nuevo lugar";
      popupFormButton.textContent = "Crear";
      firstInput.placeholder = "Título";
      secondInput.placeholder = "Enlace a la imagen";
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
    if (evt.target[2].innerText == "Guardar") {
      profileName.textContent = firstInput.value;
      profileAbout.textContent = secondInput.value;
      evt.preventDefault();  
    }
    else if (evt.target[2].innerText == "Crear") {
      evt.preventDefault();  
      const element = elementTemplate.querySelector(".elements__item").cloneNode(true);
      element.querySelector(".elements__item-img").src = secondInput.value;
      element.querySelector(".elements__item-img").alt = "Imagen de referencia del lugar " + secondInput.value;
      element.querySelector(".elements__item-name").textContent = firstInput.value;
      element.querySelector(".elements__item-button").addEventListener("click", function(evt) {
        evt.target.classList.toggle("elements__item-button_active");
        });
      elementsContainer.prepend(element);
      closeEditForm();
    }
}

edditButton.addEventListener("click", openEditForm);

closePopUpButton.addEventListener("click", closeEditForm);

formElement.addEventListener('submit', handleFormSubmit);

profileButton.addEventListener("click", openEditForm);


