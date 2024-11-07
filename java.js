
function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-";
    const tamanho = document.getElementById("tamanho").value; 
    let senhaGerada = "";
  

    for (let i = 0; i < tamanho; i++) {
      const aleatorio = Math.floor(Math.random() * caracteres.length); 
      senhaGerada += caracteres.charAt(aleatorio); 
    }
  

    document.getElementById("senha").value = senhaGerada;
  

    document.getElementById("mensagem").innerHTML = "";
  }
  

  function copiar() {
    const valor = document.getElementById("senha").value;
  
    if (valor) {
      navigator.clipboard.writeText(valor); 
      mostrarMensagem("Senha copiada com sucesso!");
    } else {
      mostrarMensagem("Nenhuma senha foi gerada.");
    }
  }
  

  function mostrarMensagem(texto) {
    document.getElementById("mensagem").innerHTML = texto;
  }
  