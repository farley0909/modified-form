    function mostraPesquisaTitulo(pesquisa){
        let titulo = document.getElementById("questaoPesquisa")
        titulo.innerHTML=""+pesquisa.questao
        console.log(pesquisa)
    }
    export {mostraPesquisaTitulo}