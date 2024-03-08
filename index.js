//! ----==== SELECTORS ===-------
const btnResta = document.querySelector('.btn-resta ').value;
const btnSuma = document.querySelector('.btn-suma').value;
const accountNumber = document.querySelector('.accountNumber');

 const btnRetiro = document.querySelector('.btn-retiro');
const btnDeposito = document.querySelector('.btn-deposito');
const btnContinuar = document.querySelector('.btn-continuar');
const btnCancelar = document.querySelector('.btn-cancelar');
const screen = document.querySelector('.screen');
const number = Array.from(document.querySelectorAll('.number'));
let login = '';
let userIndex = 0;
let retiro = false;
let deposito = false;
let bankUsers = [
  {
    accoutId: '1234',
    name: 'Carlos',
    middleName: 'Manuel',
    lastname: 'Ortiz',
    accoutBalance: 10,
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

//! ------===EVENT LISTENER ===-----
window.addEventListener('load', handleEventListers);



function handleEventListers() {
  btnRetiro.addEventListener('click', handleRetiro);
  btnDeposito.addEventListener('click', handleDeposito);
  btnContinuar.addEventListener('click', handleAcountNum);
  btnCancelar.addEventListener('click', handleCancelar);
  number.map(button => {
    button.addEventListener('click', handleDisplay, handleAcountNum);
  });
};

function handleDisplay(e) {
  accountNumber.value += e.target.value;

};


function handleAcountNum(e) {
  e.preventDefault()

  for (let index = 0; index < bankUsers.length; index++) {
    if (accountNumber.value == bankUsers[index].accoutId) {
      userIndex = index;
      login = 'login'
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>Bienvenido ${bankUsers[index].name} ${bankUsers[index].lastname} </h1>
      <h2> balance es de $${bankUsers[index].accoutBalance}</h2>
      <h2>Selecccion una opcion : Retiro o Deposito</h2>
      
      ` }

  };
  if (login == '') {

    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>Numero de Cuenta no encontrado</h1>
      <h2>Verificar numero de cuenta e inter de nuevo !</h2>
      `
    setTimeout(() => {
      location.reload();
    }, "3000");

  };
  if (retiro == true && login == 'login') {
    if (bankUsers[userIndex].accoutBalance < 10) {
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[userIndex].name} su retiro no pudo ser efectuado</h1>
      <h2>Su  porque se  balance es de  menor a $ 10.00  o su cuenta estaria en numeros negativos</h2>
      `
    } else {
      if (bankUsers[userIndex].accoutBalance - accountNumber.value < 0) {

        screen.innerHTML = ""
        screen.innerHTML += `
      <h1>  ${bankUsers[userIndex].name} su retiro no pudo ser efectuado</h1>
      <h4>Su  porque  su cuenta estaria en numeros negativos lo sentimos!</h4>
      `

      } else {
        screen.innerHTML = ""
        screen.innerHTML += `
      <h1>  ${bankUsers[userIndex].name} su retiro fue  exitoso</h1>
      <h2>Su  Nuevo balance es de :$${bankUsers[userIndex].accoutBalance -= accountNumber.value}</h2>
      `
        userIndex = 0;
        retiro = false;
        setTimeout(() => {
          location.reload();
        }, "4000");
      }
    };


  } else if (deposito == true && login == 'login') {
    if (bankUsers[userIndex].accoutBalance + Number(accountNumber.value) > 990 || bankUsers[userIndex].accoutBalance > 990) {
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[userIndex].name} su deposito no pudo ser efectuado</h1>
      <h2>  porque se  balance es de  mayo a $ 990.00  o su cuenta estariapor arriva del deposito mayor a 990</h2>
      `
    } else {
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[userIndex].name} su retiro fue  exitoso</h1>
      <h2>Su  Nuevo balance es de :$${bankUsers[userIndex].accoutBalance += Number(accountNumber.value)}</h2>
      `
      userIndex = 0;
      deposito = false;
      setTimeout(() => {
        location.reload();
      }, "4000");
    };
  };;

 

};



function handleRetiro() {
  for (let index = 0; index < bankUsers.length; index++) {
    if (login == 'login' && accountNumber.value == bankUsers[index].accoutId) {
      retiro = true
      accountNumber.value = ''
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[index].name} por favor Ingresar monto a retirar </h1>
      <h2>Su balance es de $${bankUsers[index].accoutBalance}</h2>
      `

    };



  }
  if (login == '') {
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>Por favor ingresar numero de cuenta</h1>
      
      `
    setTimeout(() => {
      location.reload();
    }, "2000");
  };

};

function handleDeposito() {

  for (let index = 0; index < bankUsers.length; index++) {
    if (login == 'login' && accountNumber.value == bankUsers[index].accoutId) {
      deposito = true
      accountNumber.value = ''
      screen.innerHTML = ""
      screen.innerHTML += `
      <h1>  ${bankUsers[index].name} por favor Ingresar monto a depositar </h1>
      <h2>Su balance es de $${bankUsers[index].accoutBalance}</h2>
      `

    };



  }
  if (login == '') {
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>Por favor ingresar numero de cuenta</h1>
      
      `
    setTimeout(() => {
      location.reload();
    }, "2000");
  };
}



function handleCancelar() {

  if (!login && accountNumber.value != '') {
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1>No hay nada que cancelar ! </h1>
      
      `
    setTimeout(() => {
      location.reload();
    }, "2000");
  }else{
    login = '';
    accountNumber.value = ''
    screen.innerHTML = ""
    screen.innerHTML += `
      <h1 class="cancelado-title" >Has cancelado la transaccion con exito! </h1>
      
      `
    setTimeout(() => {
      location.reload();
    }, "2000");
  }

}

