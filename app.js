function pesquisar() {
    // Função responsável por buscar dados e exibir os resultados
    // em uma seção HTML.
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campoPesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.ineerHTML = "<p>Nada foi encontrado. Digite o nome do time</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Inicializa uma string vazia para armazenar os resultados da busca.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa.
      if (titulo.includes(campoPesquisa) || 
    descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria novo elemento para cada resultado
              resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"> Mais informações </a>
        </div> 
      `;
    }
    }
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }

      // Atribui o HTML gerado à seção, atualizando o conteúdo da página.
    section.innerHTML = resultados;
  }