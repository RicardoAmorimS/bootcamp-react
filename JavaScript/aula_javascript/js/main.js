// var imoveis = [{ tipo: "casa", endereco: "Rua dos doido", qtdQuartos: 2, qtdBanheiros: 1 }, { tipo: "Apartamento", endereco: "Rua doooida", qtdQuartos: 1, qtdBanheiros: 1 }]

// if (idade>= 18){
//   alert("maior de idade");
// }else{
//   alert("menor de idade");
// };

function validaIdade() {
  var idade;
  idade = document.getElementById('idade').value;
  console.log(idade);

  if (idade >= 18) {
    return alert('Maior de idade');
  } else {
    return alert('Menor de idade');
  }
}
function trocar(elemento) {
  elemento.innerHTML = 'Ta inshokkkkkk';
}

function voltar(elemento) {
  elemento.innerHTML = 'passe o mouse aki';
}
