let item1;
let preco1;
let item2;
let preco2;
let item3;
let preco3;

function selecionarComida(comida) {
 
    const botaoSelecionado = document.querySelector('.pratos-imagem-comida.selecionado');

        if(botaoSelecionado !== null) {
          botaoSelecionado.classList.remove('selecionado')
         }
     comida.classList.add('selecionado'); 
     
    pedidoSelecionado();
   }

function selecionarBebida(bebida) { 
    const bebidas = document.querySelector('.pratos-imagem-bebida.selecionado ');

    if(bebidas !== null) {
        bebidas.classList.remove('selecionado');   
     }
     bebida.classList.add('selecionado'); 
     
     pedidoSelecionado();
}
function selecionarSobremesa(sobremesa) { 
    const sobremesas = document.querySelector('.pratos-imagem-sobremesa.selecionado ');

    if(sobremesas !== null) {

        sobremesas.classList.remove('selecionado');
    }
     sobremesa.classList.add('selecionado');
   
     pedidoSelecionado();
     
}

    function pedidoSelecionado(){

    const comidas = document.querySelector('.pratos-imagem-comida.selecionado');
    
    const bebidas = document.querySelector('.pratos-imagem-bebida.selecionado');
    
    const sobremesas = document.querySelector('.pratos-imagem-sobremesa.selecionado');
    
    if(comidas && bebidas && sobremesas !== null){
        const confirmar = document.querySelector('.msg-pedidos')
        confirmar.classList.add('confirmado')
        const mudanca = confirmar.getElementsByTagName('h1')[0] 
            mudanca.innerHTML = "Confirmar Pedido" 
        
        return true

        
    }

}
function fazerPedido(){

    if (pedidoSelecionado() === true) {

       const nomecomida = document.querySelector('.pratos-imagem-comida.selecionado h3 ');
       const nomebebida = document.querySelector('.pratos-imagem-bebida.selecionado h3 ');
       const nomesobremesa = document.querySelector('.pratos-imagem-sobremesa.selecionado h3');
       
        const precocomida = document.querySelector('.pratos-imagem-comida.selecionado span');     
        const precobebida = document.querySelector('.pratos-imagem-comida.selecionado span');
        const precosobremesa = document.querySelector('.pratos-imagem-comida.selecionado span');

        const comidaPedida = nomecomida.innerHTML;
        const bebidaPedida = nomebebida.innerHTML;
        const sobremesaPedida = nomesobremesa.innerHTML;

        const precoPrato =  Number(precocomida.innerHTML.replaceAll(',', '.'));
        const precoBebida =  Number(precobebida.innerHTML.replaceAll(',', '.'));
        const precoSobremesa =  Number(precosobremesa.innerHTML.replaceAll(',', '.'));

        const valorTotal = ( precoPrato+ precoSobremesa + precoBebida) .toFixed(2);

        const pedido =
         (
     `Olá, gostaria de fazer o pedido:

    - Prato: ${comidaPedida}
    - Bebida: ${bebidaPedida}
    - Sobremesa: ${sobremesaPedida}
     Total: R$ ${valorTotal}`   
     ) 

        let uri = encodeURIComponent(pedido)

        window.open( 'https://wa.me/5527999878756?text='+uri)

        console.log(pedido); 
}   
}

