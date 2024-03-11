//--declaro mis variables
if (JSON.parse(sessionStorage.getItem('users')) == null) {
  sessionStorage.setItem('users', JSON.stringify([]));
}

if (JSON.parse(sessionStorage.getItem('currentUser')) == null) {
  sessionStorage.setItem('currentUser', JSON.stringify([]));
}

//--agrego funcion al boton "sigIn" y sus condiciones

function signIn(event) {
    event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  let user = new User(email, password);

  let users = JSON.parse(sessionStorage.getItem('users'));

  users.push(user);

  sessionStorage.setItem('users', JSON.stringify(users));

  console.log(users);
}

//--agrego funcion al boton "logIn" y sus condiciones

function login() { 
    event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  let users = JSON.parse(sessionStorage.getItem('users'));

  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      user = users[i];
    }
  }
  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    window.location.replace('./menu.html');
  } else {
    alert("Usuario y/o clave incorrectos, Registrarse");
  }
  console.log(user);
}





