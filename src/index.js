const prompt =  require('prompt-sync')();

let clientes = [];

function cadastrarClientes(){
  let nome = prompt("Informe o seu nome"); 
  let endereco = prompt("Informe o seu endereco");  
  let email = prompt("Informe o seu email"); 

  const novoCliente = {
    nome:nome,
    endereco:endereco,
    email:email,
  };
 

   clientes.push(novoCliente.nome, novoCliente.endereco, novoCliente.email)
     console.log(clientes);
}

cadastrarClientes() 


let produtos = []

function cadastrarProduto()
{
     let nome = prompt("Informe o nome do produto"); 
     let preco = parseFloat(prompt("Informe o preço do produto: "));
     let qtdCadaItem = parseInt(prompt("Informe a qtdCadaItem: ")); 
    

     const novoProduto = {
        nome:nome, 
        preco:preco,
        qtdCadaItem:qtdCadaItem, 
        subtotal:preco*qtdCadaItem,                                       
     }


     produtos.push(novoProduto.nome, novoProduto.preco, novoProduto.qtdCadaItem, novoProduto.subtotal)
     console.log("Produtos" + produtos);

} 
cadastrarProduto(); 

do {
   var finalizarPedido = prompt("Deseja finalizar o seu pedido? (s/n): ");
   if (finalizarPedido.toLowerCase() === 's') {
       console.log("Compra finalizada.");
   } else { 
       
       console.log("Continue a sua compra");
       cadastrarProduto() 
   }   

} while (finalizarPedido=="s")




