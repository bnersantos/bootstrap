// alert("Ola Mundo")
//
//
// var text = prompt("Digite qualquer coisa:")
//
// alert(text)


function testeTexto(){
    document.getElementById('titulo').innerHTML += 'Boa tarde'
}

function testsColor(){
    const titulo = document.getElementById('titulo')
    titulo.style.color = 'red'
    titulo.style.fontSize = '50px'
}

function reset(){
    document.getElementById('titulo').innerHTML = 'Bem-vindo a +Sports'
}


function testInput() {
    document.getElementById('input').value = 'Tarde'
}

function testButton() {
    if (confirm('Realmente deseja limpar?')){
        document.getElementById('inputEmail4').value = ''
        document.getElementById('inputPassword4').value = ''
        document.getElementById('inputAddress').value = ''
        document.getElementById('inputAddress2').value = ''
        document.getElementById('inputCity').value = ''
        document.getElementById('inputState').value = ''
        document.getElementById('inputZip').value = ''
    }
}

function colorLabel(id){
    document.getElementById(id).style.color = 'white'
}
function colorLabelOut(id){
    document.getElementById(id).style.color = 'black'
}
//  function colorLabel2(){
//      document.getElementById('labelPassword').style.color = 'white'
//  }
//  function colorLabel3(){
//      document.getElementById('labelAddress').style.color = 'white'
//  }
//  function colorLabel4(){
//      document.getElementById('labelAddress2').style.color = 'white'
//  }
//  function colorLabel5(){
//      document.getElementById('labelCity').style.color = 'white'
//  }
//  function colorLabel6(){
//      document.getElementById('labelState').style.color = 'white'
//  }
//  function colorLabel7(){
//      document.getElementById('labelZip').style.color = 'white'
// }

function testLabel(id, conteudo){
    document.getElementById(id).value = conteudo
}
// function testLabel2(){
//     document.getElementById('inputPassword4').value = 'Senha'
// }
// function testLabel3(){
//     document.getElementById('inputAddress').value = 'Endereço'
// }
// function testLabel4(){
//     document.getElementById('inputAddress2').value = 'Complemento'
// }
// function testLabel5(){
//     document.getElementById('inputCity').value = 'Cidade'
// }
// function testLabel6(){
//     document.getElementById('inputZip').value = 'CEP'
// }