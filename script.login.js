const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const botaoLogin = document.getElementById("botaoLogin");
const mensagem = document.getElementById("mensagem");

botaoLogin.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    if (!email || !senha) {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (email === "admin@gmail.com" && senha === "1234") {

        localStorage.setItem("usuarioLogado", "true");

        alert("Login realizado com sucesso!");

        window.location.href = "dashboard.html";

    } else {

        mensagem.textContent = "E-mail ou senha incorretos.";

    }
});