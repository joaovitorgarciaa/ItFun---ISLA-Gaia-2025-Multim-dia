function abrirPaginaRegistar() {
    window.open("registo.html", "_blank");
    console.log("Página registrar aberta");
}


function fecharPagina() {
    let confirmacao2 = confirm("Tem a certeza que deseja fechar a janela?");
        if(confirmacao2){
            window.close();
            console.log("Janela fechada");
        }
        else {
            alert('Operação cancelada! Retorne ao registo.');
            
        }
}

function abrirPaginaRegistar2() {
    window.open("registo.html", "_self");
    console.log("Página registrar aberta");
}
