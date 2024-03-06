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
let login = '';
let index = 0;
let retiroAmount = 0;
let bankUsers = [
  {
    accoutId: '1234',
    name: 'Carlos',
    middleName: 'Manuel',
    lastname: 'Ortiz',
    accoutBalance: 200,
  },
  {
    accoutId: '1235',
    name: 'Ana',
    middleName: 'Maria',
    lastname: 'Guerra',
    accoutBalance: 500,
  },
  {
    accoutId: '12355',
    name: 'Ana',
    middleName: 'Maria',
    lastname: 'Guerra',
    accoutBalance: 600,
  },
  {
    accoutId: '01023',
    name: 'German',
    middleName: 'Manuel',
    lastname: 'Hernandez',
    accoutBalance: 60,
  },

]


console.log('numbers', number)
//! ------===EVENT LISTENER ===-----
window.addEventListener('load', handleEventListers);



function handleEventListers() {
  btnRetiro.addEventListener('click', handleRetiro);
  btnDeposito.addEventListener('click', handleDeposito);
  btnContinuar.addEventListener('click', handleAcountNum);
  btnCancelar.addEventListener('click', handleCancelar);
  number.map(button => {
    button.addEventListener('click', handleDisplay);
  });



};

function handleAcountNum(e) {
  e.preventDefault()

  for (let index = 0; index < bankUsers.length; index++) {
    if (accountNumber.value == bankUsers[index].accoutId) {
      login = 'login'
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>Bienvenido ${bankUsers[index].name} ${bankUsers[index].lastname} </h1>
      <h2>Su balance es de $${bankUsers[index].accoutBalance}</h2>
      <h2>Selecccion una opcion : Retiro o Deposito</h2>
      `
    }

  };
  if (login == '') {

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

function handleRetiro(e) {
  for (let index = 0; index < bankUsers.length; index++) {
    if (login == 'login' && accountNumber.value == bankUsers[index].accoutId) {
      accountNumber.value = ''
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[index].name} por favor Ingresar monto a retirar </h1>
      <h2>Su balance es de $${bankUsers[index].accoutBalance}</h2>

      `

    }

  }
  if (login == '') {
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

  login = '';
  accountNumber.value = ''
  screen.innerHTML = ""
  screen.innerHTML += `
      <h1>Has cancelado la transaccion con exito! </h1>
      
      `
  setTimeout(() => {
    location.reload();
  }, "2000");

}


