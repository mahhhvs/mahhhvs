document.addEventListener("DOMContentLoaded", function(){
    const aumentarFonteBtn = document.getElementById("aumentar-fonte");
    const diminuirFonteBtn = document.getElementById("diminuir-fonte");
    const conteudoPrincipal = document.querySelector("main");

    let tamanhoFonte = 16;

    aumentarFonteBtn.addEventListener("click", function(){
        tamanhoFonte += 2;
        conteudoPrincipal.style.fontSize = tamanhoFonte + "px";
    });

    diminuirFonteBtn.addEventListener("click", function(){
        tamanhoFonte -= 2;
        conteudoPrincipal.style.fontSize = tamanhoFonte + "px";
    });
});
