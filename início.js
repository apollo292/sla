const botaoLogin = document.getElementById("botaoLogin");
const botaoCadastro = document.getElementById("botaoCadastro");
const botaoCadastroVet = document.getElementById("botaoCadastro-Vet");

botaoLogin.addEventListener("click", function () {
window.location.href = "login.html";
});

botaoCadastro.addEventListener("click", function () {
window.location.href = "index.html";
});

botaoCadastroVet.addEventListener("click", function () {
window.location.href = "cadastro-vet.html";
});