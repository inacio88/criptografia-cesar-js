const form1 = document.querySelector('.c1-form');
const form2 = document.querySelector('.c2-form');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');


var palavra;
var cripto = [];
var descripto = [];
var des = "";
//Criptografar
form1.addEventListener('submit', e =>{
    e.preventDefault();

    palavra = form1.campo1.value;


    

    for (let index = 0; index < palavra.length; index++) {
        //console.log(palavra[index]);
        //console.log(palavra.charCodeAt(index));
        cripto.push(palavra.charCodeAt(index) + palavra.length);
        //console.log(cripto[index]);

        span1.innerText += cripto[index];
    }

    

});

//Descriptografar
form2.addEventListener('submit', e =>{
    e.preventDefault();
    for (let index = 0; index < cripto.length; index++) {
        descripto.push(cripto[index] - cripto.length);
        //console.log(descripto[index]);
        //span2.innerText += String.fromCharCode(descripto[index]);
        des += String.fromCharCode(descripto[index]);
    }
    span2.innerText = des;

});

String.fromCharCode(97);
