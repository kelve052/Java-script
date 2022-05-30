const numero = document.getElementById('numero')
const botao = document.getElementById('botao')
const select = document.getElementById('select')


botao.addEventListener('click', click)

function click(){
    if (numero.value == ''){
        alert('Caixa numero está vasia!\ninsira um valor!')
    }else{
        select.innerHTML = 0
        for(c = 1; c <= 10; c++){
            const criar = document.createElement('option')
            criar.value = c
            const tabuada = `${numero.value} x ${c} = ${numero.value * c}`
            criar.innerText = tabuada
            select.insertAdjacentElement('beforeend', criar)
    }   
    }
}