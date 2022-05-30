const hora_pc = new Date
const hora = hora_pc.getHours()
const min_pc = new Date
const minuto = min_pc.getMinutes()
const fundo = document.body

const cabesalho = document.getElementById('cabesalho')
const t_hora = document.getElementById('hora')
const imagem = document.getElementById('imagem')

t_hora.innerText = `Agora são ${hora} horas e ${minuto} minutos`
if (hora >=12 && hora<18){
    t_hora.innerText = `Agora são ${hora} horas e ${minuto} minutos`
    fundo.style.background = 'rgb(255, 198, 42)'
    imagem.src = 'imgs/tarde.jpg'
    cabesalho.innerText = 'Hora da Tarde 🌤'
}else if(hora >= 18 || hora < 6){
    t_hora.innerText = `Agora são ${hora} horas e ${minuto} minutos`
    fundo.style.background = 'rgb(2, 10, 82)'
    imagem.src = 'imgs/noite.jpg'
    cabesalho.innerText = 'Hora da Noite🌒'
}else{
    t_hora.innerText = `Agora são ${hora} horas e ${minuto} minutos`
    fundo.style.background = 'rgb(119, 217, 255)'
    imagem.src = 'imgs/dia.jpg'
    cabesalho.innerText = 'Hora do Dia☁'
}