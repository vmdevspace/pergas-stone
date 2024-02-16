const cfAction = document.querySelectorAll('.contact-form--field .action');
const contactFormField = document.querySelectorAll('.contact-form--field .in');
const contactFormFieldErrorMessage = document.querySelectorAll('.contact-form--field .error-hint');
const contactFormSuccess = document.querySelector('.contact-form-success');

if (cfAction.length != 0) {
    for (let i = 0; i < cfAction.length; i++) {
        cfAction[i].dataset.action = 'action-' + i;
        cfAction[i].addEventListener('input', contactFormInputEvent);
    }
}

function contactFormInputEvent() {
    const fieldNumber = parseInt(this.getAttribute("data-action").split("-")[1]);

    contactFormField[fieldNumber].classList.remove("e");
    contactFormFieldErrorMessage[fieldNumber].innerHTML = "";
    contactFormSuccess.innerHTML = "";
}