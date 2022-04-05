// Mascaras
VMasker(document.querySelector('#telefone')).maskPattern('(99) 9999-9999');
VMasker(document.querySelector('#cep')).maskPattern('99999-999');

//Regex
const formulario = document.getElementById('formulario');

function validacao(event){
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cep = document.getElementById('cep').value;

  const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const re_telefone = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
  const re_cep = /^[0-9]{5}-[0-9]{3}$/;

  if(re_email.test(email) && re_telefone.test(telefone) && re_cep.test(cep)){
    alert("Obrigado por se cadastrar " + nome + "!");
  }
  else{
    alert("Erro no cadastro!");
  }
  event.preventDefault();
}

formulario.addEventListener('submit', validacao);