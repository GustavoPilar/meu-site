let res = document.getElementById('res');
let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');

res.style.display = 'none'

document.getElementById('myBtn').onclick = function() {
    res.style.display = "block"
    const somar = document.getElementById('somar');
    const subt = document.getElementById('subtrair');
    const divi = document.getElementById('dividir');
    const mult = document.getElementById('mult');
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    let soma = n1 + n2;
    let sub = n1 - n2;
    let div = n1 / n2;
    let multi = n1 * n2;

    if (somar.checked) {
        res.innerHTML = `${n1} + ${n2} = ${soma}`;
    } else if (subt.checked) {
        res.innerHTML = `${n1} - ${n2} = ${sub}`;
    } else if (divi.checked) {
        res.innerHTML = `${n1} / ${n2} = ${div}`;
    } else if (mult.checked) {
        res.innerHTML = `${n1} * ${n2} = ${multi}`;
    } else {
        res.innerHTML = 'Escolha as opções acima ou coloque os números faltando';
    }
}

/* if (operadores == 'somar' || operadores == 'mais' || operadores == "+") {
    let n1 = +document.getElementById('n1');
    let n2 = +document.getElementById('n2');
    let soma = n1 + n2;
    res.innerHTML = `${n1} + ${n2} = ${soma}`;
} else if (operadores == "subtrair" || operadores == 'menos' || operadores == "-"){
    let n1 = +document.getElementById('n1');
    let n2 = +document.getElementById('n2');
    let sub = n1 - n2;
    console.log(`${n1} - ${n2} = ${sub}`);
} else if (operadores == "dividir" || operadores == 'divisão' || operadores == "/"){
    let n1 = +document.getElementById('n1');
    let n2 = +document.getElementById('n2');
    let divi = n1 / n2;
    console.log(`${n1} / ${n2} = ${divi}`);
} else if (operadores == "multilplicação" || operadores == 'vezes' || operadores == "*"){
    let n1 = +document.getElementById('n1');
    let n2 = +document.getElementById('n2');
    let mult = n1 * n2;
    console.log(`${n1} * ${n2} = ${mult}`);
} else {
    console.log('Escolha uma das opções');
}  */