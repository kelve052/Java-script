const  numero = document.getElementById('numero')
const botao_add = document.getElementById('botao')
const select = document.getElementById('select')
const botao_finalizar = document.getElementById('botao1')
const maim = document.getElementById('maim')
let lista = ['null']
let temp = 0
let maior = 0
let menor = 101
let soma = 0
const div = document.createElement('div')
let apagar = 0

botao_add.addEventListener('click', adicionar)
botao_finalizar.addEventListener('click', finalizar)

// botao adicionar
function adicionar(){
    div.innerHTML = ''
    temp = 0
    if (numero.value == '' || numero.value > 100 || numero.value < 1){
        alert('insira um valor valido')
        temp = 1
    }else{
        for (c = 0; c < lista.length; c++){
            if (numero.value == lista[c]){
                alert('não adicionado')
                temp = 1
            }
        }
    }
    if (temp == 0){
        const opition = document.createElement('option')
        opition.innerText = `valor ${numero.value} adicionado`
        soma += Number(numero.value)
        select.insertAdjacentElement('beforeend', opition)
        lista.push(numero.value)
        for (c=0; c<lista.length; c++){
            if (lista[c] < menor){
                menor = lista[c]
            }
        }
    }
    numero.value = ''
    numero.focus()
    
}
// botão finalisar
function finalizar(){
    if (lista == 'null'){
        alert('Adicione valores antes de tentar finalizar!')
    }else{
        if (apagar == 0){
            lista.splice(0, 1)
        }
        menor = Math.min.apply(null, lista);
        maior = Math.max.apply(null, lista);
        div.classList.add('div')
        maim.insertAdjacentElement('beforeend', div)
        const p = document.createElement('p')
        p.id = 'resul'
        div.insertAdjacentElement('beforeend', p)
        p.innerText = `Ao todo foram adicionado ${lista.length} valores!\n`
        p.innerText += `O maior valor adicionado foi ${maior}!\n`
        p.innerText += `O mnor valor adicionado foi ${menor}!\n`
        p.innerText += `A soma dos valores adicionados foram ${soma}!\n`
        p.innerText += `A média dos varores adicionados foi ${soma / lista.length}!`
        apagar = 1
    }
}