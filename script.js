const tutor = document.getElementById("nome_tutor");
const pet = document.getElementById("nome_pet");
const raca = document.getElementById("raca");
const genero = document.getElementById("genero");
const peso = document.getElementById("peso");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    
const cadastro =
    "Tutor: " + tutor.value + "\n" +
    "Pet: " + pet.value + "\n" +
    "Raça: " + raca.value + "\n" +
    "Gênero: " + genero.value + "\n" +
    "Peso: " + peso.value + " Kg\n" +
    "Idade: " + idade.value + " Anos";

console.log(cadastro);

});

/*const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput document.getElementById('senha');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    if (!email || !senha) {
        alert('Por Favor, preencha todos os campos.');
        return;
    }

    try {

        const response = await fetch('http://localhost:3000/api/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }), });
        });


        const data await response.json();

        if (response.ok) {
            localStorage.setItem('usuarioLogado, JSON.stringify(data.usuario));
            alert(data.message);
            window.location.href = 'dashboard.html';
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Não foi possível conectar ao servidor.');
    }

});*/