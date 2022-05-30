cont = numero = 25 // para converter em uma string fassa:
toString(numero)
parseInt(numero) // para converter para int
parseFloat(numero) // para converter para tipo float
Number(numero) // para converter para tipo numero tanto inte com float
Number(numero.value) //se caso a variavel estiver se referindo a um valor de input

// para concatenar string:

const a = 'meu nome é';
const idade = 25;
console.log(`${a} marcio  e minha idade é ${idade}`)

// agumas funões parecidade com o python com str:
const nome = 'maria';
nome.length //vai diser qual é o tamnho da string
nome.toUpperCase() // vai jogar tudo para maiuscula
nome.toLocaleLowerCase() // vai jogar tudo pra minuscula

// agumas funões parecidade com o python com numero:

const numero1 = 150.4;
numero1.toFixed(2)// vai mandar exibir o numero com duas casa desimais de acordo com que foi definido no parenteses.
numero1.toFixed().replace('.', ',')// replace vai trocar o que tiver definido na primeira aspas pelo caracter da segunda aspa.
numero1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})// vai mostrar o numero com frmatação de dinheiro temos rambem na ultima aspas: 'USD' e 'EUR'
numero1**numero1//pra potenciar um numero

//para escrever alguma coisa direto na tela do html use o comand:
document.write('vai ser escrito quaquer coisa que estiver dentro das aspas')

// operadores de igualdde:

a = a // a esta recebendo a
a == a // A esta sendo comparado se é igual a A
5 == '5' // rambem esta sendo comparado e da valor True pois 5 = '5'
5 === '5' // nesse sim dar valor False pois tambem compara os tipo
a != 5 // serve para negar
a && b // serve para diser 'algo' e 'algo' mais outra coisa
a || b // ser pra diser 'algo' ou 'algo' outro outra coisa

// para mudar o backgrounde e alguma stilização pelo java segue:

const vart = window.document.getElementsByTagNameNS('nome da tag')['posição em que ela ta']
/* aqui coleque a mundança:*/ vart.style.bakcground = '#ccc' 

/*comando pode mudar de acordo com tags classes e identificadores*/

document.body /*ou*/ 
document.getElementsByTagName('body')[0]
document.getElementById('para ids')// nos id não presisa declarar posição
document.getElementsByClassName('para classes')[0]

// ja esse comando é o plural de toas mencionadas acima:
document.querySelector('nome do item')['posição']
querySelectorAll // é a mesma coisa mais pra selecionar todas as posição.

// para modificar um texto do html:

const txt1 = document.getElementsByTagNameNS(p)[0]
txt1.innerText = 'texto a cer adicionado'
txt1.innerHTML = 'texto a ser adicionado' //tem maneiras que usa para mostra ai mostra com formatação do html
/*ex:*/ alert(txt1.innerHTML)

//comandos para açoes do mause:
const eve1 = document.getElementById('id_exemplo')
eve1.addEventListener('click', ao_clicar_no_conteudo)// ao clicar
eve1.addEventListener('dblclick', dobro_clic)// ao dar duplo clic
eve1.addEventListener('mouseenter', mause_em_do_conteudo) // ao mause ficar em sima do conteudo
eve1.addEventListener('mouseout', mause_sair_do_conteudo) // ao mause sair do conteudo
// as aspa serve para defenir a o tipo de evento, e o item depois da virgurla a a função a ser executada.

//codico para pegar a hora atual da macna:
const hora_agora = new Date()
const hora = hora_agora.getUTCHours()// pega a hora
let hora1 = hora_agora.getUTCMinutes() //pega os minutos
let hora2 = hora_agora.getUTCFullYear() // pegar o ano

// codico responsavel por ver em qual opição do radio foi marcada
const sexo = document.querySelectorAll('input[name="rad"]')
let find = () => {
    const select = document.querySelector('input[name="rad"]:checked').value
}

sexo.forEach(sexo => {
    sexo.addEventListener('change', find)
}
)
// parte html
{/* <input type="radio" name="rad" id="fem" value="mulher" checked>
<input type="radio" name="rad" id="mas" value="homem"><br><br></br> */}

// sobre o laço FOR:
for ('aqui coloca a variavel';'aqui coloca a condição da variavel' ; 'e aqui colcoa o que vai acontecer com a variavel a cada execução'){
    // comando a ser executado
}

// para adicionar uma tag direto pelo javaS:
const variavel_tag = document.createElement('nome da tag.ex: h1/img')
const variavee_que_armazena_o_local_onde_a_tag_sera_colocada = document.getElementById('id de uma div por exemplo')

variavee_que_armazena_o_local_onde_a_tag_sera_colocada.insertAdjacentElement('beforeend"esse comando adicionara no final mas ha varios otros onde se pode escolher onde sera posto a tag"', variavel_tag)
