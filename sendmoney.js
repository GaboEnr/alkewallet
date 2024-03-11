//--funcion para enviar dinero--

const form = document.getElementById("formulario");

let boton1 = document.getElementById('transfer');
boton1.addEventListener('click', transfer);

function transfer(){
    let name = document.getElementById('name');
    let amount = document.getElementById('amount');
    let nameValue = name.value;
    let amountValue = parseFloat(amount.value);

    let transaction = new Transaction(nameValue, "Tranferencia", amountValue);
    
    let transactions = JSON.parse(sessionStorage.getItem('transactions'));

    transactions.push(transaction);

    console.log(transactions);

    sessionStorage.setItem('transactions', JSON.stringify(transactions));

    name.value = ""
    amount.value = ""
    
    console.log("transfer");
}


//--funcion para agregar contactos ---
const contactos = [];

function add(){
    const nombre = document.querySelector ("#nombre").value;
    const cuenta = document.querySelector ("#cuenta").value;
    const banco = document.querySelector ("#banco").value;
    contactos.push({nombre, cuenta, banco});
    console.log(contactos);
    printContact();
}

//---funcion para imprimir contactos de manera dinamica en HTML 
function printContact() {
    const lista = document.querySelector('#contactList');
    lista.innerHTML = '';
    for(let i = 0; i< contactos.length; i++ ){
    lista.innerHTML += `
    <li class="list-group-item">
        <div class="contact-info">
        <span class="contact-name">${contactos[i].nombre}</span>
        <span class="contact-details">
            cuenta:${contactos[i].cuenta} Banco:${contactos[i].banco}
        </span>
        </div>
    </li>
    `;
    }
}




