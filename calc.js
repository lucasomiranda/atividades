function soma(num1,num2) {
    return num1 + num2
}

function subt(num1,num2) {
    return num1 - num2
}

function mult(num1,num2) {
    return num1 * num2
}

function divisao(num1,num2) {
    return num1 / num2
}
console.log('bip')
function caucular(operacao) {
    console.log('inicio')
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let resultado = 0
    switch (operacao) {
        case '+':
            resultado = soma(n1,n2)
            break;
        case '-':
            resultado = subt(n1,n2)
            break;
        case '*':
            resultado = mult(n1,n2)
            break;
        case '/':
            resultado = divisao(n1,n2)
            break;
        
        default:
            resultado = ""
            break;
    }
    document.querySelector('#resultado').innerHTML = '<p>' + resultado + '</p>'
}

let bntsoma = document.querySelector('#soma')
let bntsub = document.querySelector('#bnt-sub')
let bntmult = document.querySelector('#bnt-mult')
let bntdivisao = document.querySelector('#bnt-div')
let bntlimpar = document.querySelector('#bnt-limpar')
let result = document.querySelector('#resultado')


bntsoma.addEventListener('click', () =>{
    caucular('+')
})

bntsub.addEventListener('click', function(){
   caucular('-')
})

bntdivisao.addEventListener('click', function(){
    caucular('/')
})

bntmult.addEventListener('click', function(){
    caucular('*')  
})

bntlimpar.addEventListener('click', function(){ 
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.querySelector('#resultado').innerHTML = '<p></p>'
})