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
