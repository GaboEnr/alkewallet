/*aqui se guardan funciones en comun 
//para usarse como especie de memorias, para poder obtener datos previos*/

function Transaction(name, type, amount) {
    this.name = name;
    this.type = type;
    this.amount = amount ;
}

function User(email, password) {
    this.email = email;
    this.password = password;
}