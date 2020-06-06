import axios from 'axios';


    function CadastroDoacao(donateType, qtd, descricao, ong) {
        this.donateType = donateType;
        this.qtd = qtd;
        this.descricao = descricao;
        this.ong = ong;
        if (!new.target) {
          return CadastroDoacao(donateType, qtd, descricao, ong);
        }
        this.texto = function() {
          return "Descricao: " + this.descricao;
        };
    
    
        let bDoar = document.getElementById("bDoar");
        bDoar.onclick = function() {
          let cadastrodoacao =  CadastroDoacao(
            donateType = document.getElementById("tipodoacao"),
            qtd = document.getElementById("quantidade"),
            descricao = document.getElementById("descricao"),
            ong  = document.getElementById("name"),
          );
          gravarCategoria(cadastrodoacao);
        };
    

    
        let gravarCategoria = cadastrodoacao => {
              axios
                .post("http://localhost:8090/unidonate/donates", cadastrodoacao)
                .then(response => { 
                  console.log(response.data);   
                })
                .catch(error => { 
                  console.log(error);      
                });
            }
          };