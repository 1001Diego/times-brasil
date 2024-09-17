function pesquisar() {
    // Função responsável por buscar dados e exibir os resultados
    // em uma seção HTML.
    
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase() 

    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let dataFundacao = "";

    // Inicializa uma string vazia para armazenar os resultados da busca.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      dataFundacao =dado.dataFundacao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa.
      if (titulo.includes(campoPesquisa) || 
    descricao.includes(campoPesquisa) || dataFundacao.includes(campoPesquisa)  ||
    tags.includes(campoPesquisa)) {
      //cria novo elemento para cada resultado
              resultados += `
        <div class="item-resultado">
        <div class="imagem-resultado">
                <img src="${dado.imagem}" class="foto" 
                alt=Foto de"${dado.titulo}">
            </div>
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"> Mais informações </a>
        </div> 
      `;
    }
      // se campoPesquisa for uma string sem nada
      if (campoPesquisa == ""){
        section.innerHTML = "<p> Nada foi encontrado, pesquise o time desejado! </p>" 
        return
      }
      if (!section.innerHTML) {
          section.innerHTML = "<p> Nada foi encontrado, pesquise o time desejado! </p>"
          return
        }
}
      // Atribui o HTML gerado à seção, atualizando o conteúdo da página.
    section.innerHTML = resultados;
  }