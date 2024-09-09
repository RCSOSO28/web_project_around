let page = document.querySelector(".page");
let edditButton = document.querySelector(".profile__information-button1");
let popup = document.querySelector(".popup");
let closePopUpButton = document.querySelector(".popup-close");
let nameInput = document.querySelector(".popup__form-name");
let jobInput = document.querySelector(".popup__form-about");
let profileName = document.querySelector(".profile__information-name--size1");
let profileAbout = document.querySelector(".profile__information-name--size2");
let formElement = document.querySelector(".popup__form");

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