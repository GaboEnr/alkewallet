//----declarando variables para obteber elementos e imprimirlos de manera dinamica en el HTML

let tableBody = document.getElementById('body-transactions');

let transactions = JSON.parse(sessionStorage.getItem('transactions'));
console.log(transactions);

var tempBodyString = ""
for (let i = 0; i < transactions.length; i++) {
    let element = transactions[i];
    let index = i+1;
    let name = element.name;
    let type = element.type;
    let amount = element.amount;
    let row = `<tr>
    <th scope="row">${index}</th>
    <td>${name}</td>
    <td>${type}</td>
    <td>${amount}</td>
    </tr>`;
    
    tempBodyString = tempBodyString + row;
}
tableBody.innerHTML = tempBodyString;