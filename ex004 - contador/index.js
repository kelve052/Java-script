const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')
const passo = document.getElementById('passo')
const div2 = document.getElementById('preparando_contagem')
const botao = document.getElementById('botao')
const h2 = document.getElementById('h2')

const p = document.createElement('p')

botao.addEventListener('click', contar)

function contar(){
    p.innerText = ``
    if (inicio.value == ''){
        h2.innerText = 'Inicio não definido tente novamente!'
        h2.classList.add('vermelho')
    }else{
        if(fim.value == '' || fim.value == 0){
            fim.value = 0
            alert('caiu 0 o fim')
        }
        let cont = inicio.value
        while (cont <= fim.value){
            div2.insertAdjacentElement("beforeend", p)
            p.innerText += ` -> ${cont}`
            cont = (Number(cont) + Number(passo.value))
        }
    }
    h2.innerText = 'Contagem susedida:'
    h2.classList.add('azul')
    p.classList.add('negrito_p')
}