
let buton = document.querySelector('#bnt-cep')
let div = document.querySelector('#correspondencia') 
let excluir = document.querySelector('#apagar')

async function buscaCEP(cep) {
    try {
            const retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await retorno.json();
            return dados
    } catch (erro) {
        console.error('erro a o buscar o cep:', erro)
    }
    
    
}

async function executar(cepd) {
    const dados = await buscaCEP(cepd);
    document.getElementById('rua').innerText = "Rua: " + dados.logradouro;
    document.getElementById('bairro').innerText = "Bairro: " + dados.bairro;
    document.getElementById('cidade').innerText = "Cidade: " + dados.localidade;
    document.getElementById('estado').innerText = "Estado: " + dados.uf;

}

 

buton.addEventListener('click', async() => {
    
    executar(input)

})

excluir.addEventListener('click', () => {

    document.getElementById('inp-cep').value = '';

})
