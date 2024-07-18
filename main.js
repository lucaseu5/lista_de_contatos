const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];
const telefoneInput = document.getElementById('numero-celular');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo')
    const inputCelular = document.getElementById('numero-celular')

    if (nomes.includes(inputNomeCompleto.value)) {
        alert(`O contato ${inputNomeCompleto.value} Ja foi inserido`)
    } else {
        nomes.push(inputNomeCompleto.value);
        numeros.push(parseFloat(inputCelular.value));

        let linha = "<tr>"
        linha += `<td> ${inputNomeCompleto.value}</td>`;
        linha += `<td> ${inputCelular.value}</td>`
        linha += `<tr>`;

        linhas += linha;
    }

    inputNomeCompleto.value = '';
    inputCelular.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


telefoneInput.addEventListener('input', function() {
    let valor = this.value.replace(/\D/g, '');
    let formatado;

    if (valor.length === 11) {
        formatado = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length === 10) {
        formatado = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        formatado = valor;
    }

    this.value = formatado;
});