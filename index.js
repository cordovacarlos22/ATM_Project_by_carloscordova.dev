//! ----==== SELECTORS ===-------
const btnCero = document.querySelector('.btn-0').value;
const btnOne = document.querySelector('.btn-1').value;
const btnTwo = document.querySelector('.btn-2').value;
const btnThre = document.querySelector('.btn-3').value;
const btnFour = document.querySelector('.btn-4').value;
const btnFive = document.querySelector('.btn-5').value;
const btnSix = document.querySelector('.btn-6').value;
const btnSevent = document.querySelector('.btn-7').value;
const btnEight = document.querySelector('.btn-8').value;
const btnNine = document.querySelector('.btn-9').value;
const btnResta = document.querySelector('.btn-resta ').value;
const btnSuma = document.querySelector('.btn-suma').value;
const accountNumber = document.querySelector('.accountNumber');
const form = document.querySelector('.form'); // selects from
const btnRetiro = document.querySelector('.btn-retiro');
const btnDeposito = document.querySelector('.btn-deposito');
const btnContinuar = document.querySelector('.btn-continuar');
const btnCancelar = document.querySelector('.btn-cancelar');
const screen = document.querySelector('.screen');
const number = Array.from(document.querySelectorAll('.number'));
const operator = Array.from(document.querySelectorAll('.operators'));
let user = '';
console.log('numbers', number)
//! ------===EVENT LISTENER ===-----
window.addEventListener('load', check);
number.map(button => {
  button.addEventListener('click', handleDisplay);
});


function check() {
  btnRetiro.addEventListener('click', handleRetiro);
  btnDeposito.addEventListener('click', handleDeposito);
  btnContinuar.addEventListener('click', handleAcountNum);
  btnCancelar.addEventListener('click', handleCancelar);
};

function handleAcountNum(e) {
  e.preventDefault()
  if (accountNumber.value == 1234) {
    user = 'login'
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>User Found</h1>
      <h2>Selecccion una opcion : Retiro o Deposito</h2>
      `
  } else {
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>User Found not found </h1>
      <h2>Verificar numero de cuenta e inter de nuevo </h2>
      `
    setTimeout(() => {
      location.reload();
    }, "3000");
  }
};

function handleDisplay(e) {
  accountNumber.value += e.target.value;
};

function handleRetiro() {
  if (user == 'login'){
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>Ingresar monto a retirar </h1>
      <input class="accountNumber" type="text" value='' >
      `
      console.log(accountNumber)
  }else {
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>Por favor ingresar numero de cuenta</h1>
      `
    setTimeout(() => {
      location.reload();
    }, "2000");
  }
 
}

function handleDeposito() {

}

function handleCancelar() {

  user = '';
  accountNumber.value = ''
  location.reload();

}


