document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const inputSenha = document.querySelector("input[type='password']");
    const btnEntrar = document.querySelector("button");

    btnEntrar.addEventListener("click", function () {
      const senhaDigitada = inputSenha.value;

      
      if (senhaDigitada === "1452") {
        
       
    
            window.location.href = 'jogadores.html';
        
    
        
        
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    });
  });
