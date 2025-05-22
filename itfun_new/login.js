function abrirPaginaLogin() {
    window.open("login.html")
    console.log('Login aberta');
}



function fecharPaginaLogin() {

    let confirmacao = confirm("Deseja fechar a página de login?");

    if (confirmacao) {
        window.close();
        console.log("Janela fechada");
    }
    else {
        alert('Operação cancelada! Retorne ao login.');
    }
}

function abrirPaginaLogin2() {
    window.open("login.html", "_self")
    console.log('Login aberta');
}
