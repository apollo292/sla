//guardando o formulário dentro de uma constante
const vetForm = document.getElementById("cadastro-vet");

//verificando o evento de click quando o usuário
//clicar no botão salvar
vetForm.addEventListener('submit', async (e) =>{
    e.preventDefault();

    //pegando os dados que usuário digitou na tela e guardando
    //em  um json {chave e valor}
    const vetData = {
        nome: document.getElementById("nome").value.trim(),
        cfmv: parseInt(document.getElementById("cfmv").value),
        especialidade: document.getElementById("especialidade").value.trim(),
    }

    //verifico se os campos estão vazios e peço ao usuáriopara preencher os campos
    if(!vetData.nome || !vetData.cfmv || !vetData.especialidade){
        alert("PReencha tudo")
        return
    }

    try {
        //envia a requisição 
        const response = await fetch('https://localhost:3000/api/vets', {
            method: 'POST',
            headers: { 'content-Type': 'aplication/json'},
            body:   JSON.stringify(vetData)
        });

        const data = await response.json();

        //verifica a resposta
        if(response.ok){
            alert(data.message);
        }else{
            alert(data.message);
        }

    } catch (error) {
        console.error('Erro na requisição', error);
        alert('Erro ao conectar com o servidor')
    }
});