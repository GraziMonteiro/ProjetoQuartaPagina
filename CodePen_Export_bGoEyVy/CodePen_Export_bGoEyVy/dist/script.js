let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let data = document.querySelector('#data')
let labeldata = document.querySelector('#labeldata')
let validdata = false

let comentar = document.querySelector('#comentar')
let labelcomentar = document.querySelector('#labelcomentar')
let validcomentar = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelnome.setAttribute('style', 'color: red')
    labelnome.innerHTML = 'nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validnome = false
    
  } else {
    labelnome.setAttribute('style', 'color: green')
    labelnome.innerHTML = "nome"
    nome.setAttribute('style', 'border-color: green')
    validnome = true
  }
  
})
                                

data.addEventListener('keyup', () => {
  if(data.value.length <= 2){
    labeldata.setAttribute('style', 'color: red')
    labeldata.innerHTML = 'data *Insira no minimo 8 caracteres'
    data.setAttribute('style', 'border-color: red')
    validdata = false
    
  } else {
    labeldata.setAttribute('style', 'color: green')
    labeldata.innerHTML = "data"
    data.setAttribute('style', 'border-color: green')
    validdata = true
  }
  
})

let textArea = document.querySelector("textarea")

textArea.addEventListener('input', function(){
  let caracter = textArea.maxLength; // Pegar o tamanho maximo permitido no textarea
  let contador = textArea.value.length; // Reponsavel por contabilizar os caracteres que estão sendo digitados
  
  let h4 = document.querySelector('h4').innerHTML = (caracter - contador)
  let mensagem = document.querySelector('span');
 
 

  if(contador <= 5)
    mensagem.innerHTML = 'Minimo 5 carateres permitido'
  else
    mensagem.innerHTML = ' '
})










// comentar.addEventListener('keyup', () => {
//   if(comentar.value.length <= 5){
//     labelcomentar.setAttribute('style', 'color: red')
//     labelcomentar.innerHTML = 'comentar *Insira um comentario abaixo'
//     comentar.setAttribute('style', 'border-color: red')
//     validcomentar = false
    
//   } else {
//     labelcomentar.setAttribute('style', 'color: green')
//     labelcomentar.innerHTML = "comentar"
//     comentar.setAttribute('style', 'border-color: green')
//     validcomentar = true
//   }
  
// })


// function adicionar(){
//   if(validnome && validdata && validcomentar){
//    msgSuccess.setAttribute('style', 'display: block')
//    msgSuccess.innerHTML = '<strong>Enviando comentario...</strong> '
//    msgError.setAttribute('style', 'display: none')
//    msgError.innerHTML = ''
  
   
//   } else {
//   msgError.setAttribute('style', 'display: block') 
//   msgError.innerHTML = ' <strong>Preencha todos os campos corretamente antes de enviar</strong> '
//      msgSuccess.innerHTML = ''
//      msgSuccess.setAttribute('style', 'display:none')  
// }
//    }