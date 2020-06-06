function Categoria(id, descricao) {
    this.id = id;
    this.descricao = descricao;
    if (!new.target) {
      return new Categoria(id, descricao);
    }
    this.texto = function() {
      return "Descricao: " + this.descricao;
    };
  }
  
  let atualizaLista = () => {
    axios
      .get("http://localhost:8080/loja/categorias", {})
      .then(response => {
        criarLista(response.data);
        editaCategoria(new Categoria("",""))
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  let criarLista = categorias => {
    console.log(categorias)
    let ul = document.getElementById("listaCategorias");
    while( ul.firstChild ){
      ul.removeChild( ul.firstChild );
    }
    for (let i = 0; i < categorias._embedded.categorias.length; i++) {
      let elementoLi = document.createElement("li");
      let spanDescricao = document.createElement("span");
      spanDescricao.innerHTML = categorias._embedded.categorias[i].descricao;
      elementoLi.appendChild(spanDescricao);
      let botao1 = document.createElement("button");
      botao1.innerHTML = " e ";
      elementoLi.appendChild(botao1);
      let botao2 = document.createElement("button");
      botao2.innerHTML = " x ";
      elementoLi.appendChild(botao2);
      botao1.onclick = function() {
        editaCategoria(categorias._embedded.categorias[i]);
      };
      botao2.onclick = function() {
        removeCategoria(categorias._embedded.categorias[i]);
      };
      ul.appendChild(elementoLi);
    }
  };
  
  let editaCategoria = categoria => {
    let id = document.getElementById("id");
    let descricao = document.getElementById("descricao");
    id.setAttribute("value" , categoria.id);
    id.value = categoria.id;
    descricao.setAttribute("value" , categoria.descricao);
    descricao.value = categoria.descricao;
  };
  
  let gravarCategoria = categoria => {
    if (categoria.id > 0) {
      axios
        .put("http://localhost:8080/loja/categorias/" + categoria.id, categoria)
        .then(response => { 
          console.log(response.data); 
          atualizaLista();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:8080/loja/categorias/", categoria)
        .then(response => { 
          console.log(response.data); 
          atualizaLista();    
        })
        .catch(error => { 
          console.log(error);      
        });
    }
  };
  
  let removeCategoria = categoria => {
    axios
      .delete("http://localhost:8080/loja/categorias/" + categoria.id, {})
      .then(response => { 
        console.log(response.data);  
        atualizaLista();  
      })
      .catch(error => { 
        console.log(error);
      });
  };
  
  window.onload = function() {
    atualizaLista();
    let bCadastrar = document.getElementById("bCadastrar");
    bCadastrar.onclick = function() {
      let categoria = new Categoria(
        document.getElementById("id").value,
        document.getElementById("descricao").value,
      );
      gravarCategoria(categoria);
    };
    let bNovo = document.getElementById("bNovo");
    bNovo.onclick = function() {
      editaCategoria(new Categoria("",""))
    };
  };