const cep = document.getElementById('cep');
const btnConsultar = document.querySelector('.consultar');

function inserirValores(dados) {
    document.getElementById('logradouro').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('localidade').value = dados.localidade;
    document.getElementById('uf').value = dados.uf;
}

function coletarCep() {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    if(cep.value == '' || cep.value.length < 8) {
        alert('CEP incorreto!');
    } else {
        fetch(url).then(response => response.json())
        .then(dados => {
            if(dados.hasOwnProperty('erro')) {
                alert('CEP não encontrado');
            } else {
                inserirValores(dados);
            }
        })
    }
}

btnConsultar.addEventListener('click', coletarCep);