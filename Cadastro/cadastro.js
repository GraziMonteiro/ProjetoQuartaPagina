Js 
const btn = document.querySelector('.btn');
btn.style.background = '#8871a7';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit');

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();

// console.log(nameInput.value);
if (nameInput.value === '' || emailInput.value === '' || senhaInput.value ==='') {
    alert('Por favor, preencha os dados.');
   msg.classList.add('error');
   msg.innerHTML = ' Preencha os dados.';
   setTimeout(() => (msg.innerHTML = '') /*msg.remove()*/, 3000);
}else {
    console.log('sucess');
   const li = document.createElement('li');
   li.appendChild(
       document.createTextNode(
           `${nameInput.value} : ${emailInput.value} : ${senhaInput.value}`
       )
   );
   userList.appendChild(li);
   // Limpa o formulário
   nameInput.value = '';
   emailInput.value = '';
   senhaInput.value ='';
   horario.getElementsByTagName('option')[0].selected = 'selected';
   nameInput.focus(); //Coloca o foco no elmento
}
/*function mostrarOcultarSenha(){
    var senha = document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type=="password"
    }
}*/

}
// Validando e-mail
emailInput.addEventListener('change', (e) => {
let padrao = new RegExp(/.*@.*\..*/i);
if (!padrao.test(emailInput.value)) {
   //alert('Por favor, insira um e-mail válido.');
   msg_email.classList.add('error');
   msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
   setTimeout(() => msg.remove(), 3000);
}
});
