function validarCPF(cpf) {

    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;

    // primeiro dígito
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;

    // segundo dígito
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto !== parseInt(cpf[10])) return false;

    return true;
}

let botao = document.querySelector('#bnt-cpf')
let linha = document.querySelector('#verificado')
let limpar = document.querySelector('#bnt-exc')

botao.addEventListener('click', () => {

    let cpf = document.getElementById('inp-cpf').value

    if (validarCPF(cpf)){
        texto = 'valido' 
    }else{
        texto = 'cpf invalido'
    }
    linha.innerHTML = '<p>'+ texto + '</p>'
});

limpar.addEventListener('click', () => {
    texto = " ";
    document.getElementById('inp-cpf').value = ' ';
    linha.innerHTML = '<p>'+ texto + '</p>'
})



