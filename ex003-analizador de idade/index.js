const data_pc = new Date
const data_atual = data_pc.getFullYear()

const data = document.getElementById('data')
const botao = document.getElementById('botao')
const sexo = document.querySelectorAll('input[name="rad"]')
const imagem = document.getElementById('imagem')
const resposta = document.getElementById('resposta')
const section1 = document.getElementById('resul')
let genero = 'Mulher'

// codico responsavel por ver em qual opição do radio foi marcada
let find = () => {
    const select = document.querySelector('input[name="rad"]:checked').value
    if (select == 'mulher'){
        genero = 'Mulher'
        // MULHER
        botao.addEventListener('click', vereficar)
        function vereficar(){
        resposta.innerText = `Voce é uma ${genero} de ${data_atual - data.value} anos`
        if (data_atual - data.value >= 18 && data_atual - data.value < 60){
            // adulto
            section1.innerHTML = '<img id="imagem" src="imgs/mulher adulta.jpg"></img>'
        }else if(data_atual - data.value >= 60 && data_atual - data.value <= 109){
            // velhinho
            section1.innerHTML = '<img id="imagem" src="imgs/mulher velha.jpg"></img>'
        }else if(data_atual - data.value  < 18 && data_atual - data.value  >= 12){
            // adolecente-jovem
            section1.innerHTML = '<img id="imagem" src="imgs/mulher jovem.jpg"></img>'
        }else if(data_atual - data.value < 12 && data_atual - data.value > 0){
            // criança
            section1.innerHTML = '<img id="imagem" src="imgs/mulher crinca.jpg"></img>'
        }else if(data_atual - data.value <= -1){
            // ainda presisa dos pais se conhecerem
            section1.innerHTML = '<img id="imagem" src="imgs/encontro.jpg"></img>'
            resposta.innerText = `Seu pai ainda presisa chegar na sua mãe!`
        }else if(data_atual - data.value == 0){
            // ja esta no embrião
            resposta.innerText = `Voce ainda é um embrião!`
            section1.innerHTML = '<img id="imagem" src="imgs/embriao.jpg"></img>'
        }else if(data_atual - data.value >= 110){
            // esqueleto
            resposta.innerText = `Voce é um ${genero} esqueleta de ${data_atual - data.value} anos`
            section1.innerHTML = '<img id="imagem" src="imgs/mulher esqueleto.jpg"></img>'
        }
    }
    }else{
        genero = 'Homem'
        // HOMEM
    botao.addEventListener('click', vereficar1)
    function vereficar1(){
        resposta.innerText = `Voce é um ${genero} de ${data_atual - data.value} anos`
        if (data_atual - data.value >= 18 && data_atual - data.value < 60){
            // adulto
            section1.innerHTML = '<img id="imagem" src="imgs/homem adulto.jpg"></img>'
        }else if(data_atual - data.value >= 60 && data_atual - data.value <= 109){
            // velhinho
            section1.innerHTML = '<img id="imagem" src="imgs/homem velhor.jpg"></img>'
        }else if(data_atual - data.value  < 18 && data_atual - data.value  >= 12){
            // adolecente-jovem
            section1.innerHTML = '<img id="imagem" src="imgs/homem jovem.jpg"></img>'
        }else if(data_atual - data.value < 12 && data_atual - data.value > 0){
            // criança
            section1.innerHTML = '<img id="imagem" src="imgs/homem crinca.jpg"></img>'
        }else if(data_atual - data.value <= -1){
            // ainda presisa dos pais se conhecerem
            section1.innerHTML = '<img id="imagem" src="imgs/encontro.jpg"></img>'
            resposta.innerText = `Seu pai ainda presisa chegar na sua mãe!`
        }else if(data_atual - data.value == 0){
            // ja esta no embrião
            resposta.innerText = `Voce ainda é um embrião!`
            section1.innerHTML = '<img id="imagem" src="imgs/embriao.jpg"></img>'
        }else if(data_atual - data.value >= 110){
            // esqueleto
            resposta.innerText = `Voce é um ${genero} esqueleto de ${data_atual - data.value} anos`
            section1.innerHTML = '<img id="imagem" src="imgs/homem esqueleto.jpg"></img>'
        }
    }
    }
}

sexo.forEach(sexo => {
    sexo.addEventListener('change', find)
}
)