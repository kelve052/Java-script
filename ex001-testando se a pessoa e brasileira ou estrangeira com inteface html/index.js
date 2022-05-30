const pais = document.getElementById('caixa')
const res = document.getElementById('res')
const botao = document.getElementById('botao')
const pais1 = (pais.value).toUpperCase()
botao.addEventListener('click', analizar)
function analizar(){
    if (pais1 == 'BRASIL'){
        res.innerText = `Voce é do pais ${pais.value}!\nVoce é Brasileiro!`
    }else if (pais1 == ''){
        res.innerText = `usuario preferio não informar pais`
    }
    else{
        res.innerText = `voce é do pais ${pais.value}!\nVoce é estrangeiro!`
    }
}