
var total = parseFloat(sessionStorage.getItem('total'));

let boton1 = document.getElementById('depositar');
let montoIngresado = document.getElementById('monto-ingresado');

console.log(total);
montoIngresado.innerHTML = `Saldo: ${total}`;

boton1.addEventListener('click', depositar);




function depositar(){
    let valor1 = document.getElementById('valor1');
    let value = parseFloat(valor1.value);

    console.log(value);
    if (value == 0 || isNaN(value)) {
        alert("Ingrese un numero valido.");
        return;
    }
    
    total = total + value;
    console.log(total);
    montoIngresado.innerHTML = `Saldo: ${total}`;
    valor1.value = ""

    let transaction = new Transaction("Usuario", "Deposito", value);

    let transactions = JSON.parse(sessionStorage.getItem('transactions'));

    transactions.push(transaction);

    console.log(transactions);

    sessionStorage.setItem('transactions', JSON.stringify(transactions));

    sessionStorage.setItem('total', total);
    console.log(total);
    
    console.log("depositar");
}

