function ativarForm (formID) {
    document.querySelectorAll(".form-caixa").forEach(form => form.classList.remove("active"))
    document.getElementById(formID).classList.add("active")
}