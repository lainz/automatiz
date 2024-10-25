const email = document.getElementById("correo");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity(
            "¡Se esperaba una dirección de correo electrónico!",
        );
    } else {
        email.setCustomValidity("");
    }
});