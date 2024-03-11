//---funcion de Jquery------

$(document).ready(function(){
    $("#botonSlideDown").click(function(){
    $("#parrafo1").slideDown(2000);
    });
});



if (JSON.parse(sessionStorage.getItem('transactions')) == null) {
    sessionStorage.setItem('transactions', JSON.stringify([]));
}

sessionStorage.setItem('contacts', JSON.stringify([]));

if (sessionStorage.getItem('total') == null) {
    sessionStorage.setItem('total', 0);
}

// para reiniciar la cuenta
//sessionStorage.setItem('transactions', JSON.stringify([]));
//sessionStorage.setItem('total', 0);


//--llamando a la funcion menu para que se ejecute lo que este dentro.

function menu(){
    const email = document.querySelector("#email");
    const total = document.querySelector("#total");
    let totalValue = parseFloat(sessionStorage.getItem('total'));

    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    email.innerHTML = currentUser.email;
    total.innerHTML = totalValue;

}


