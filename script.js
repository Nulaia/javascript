const nome = 'marco';
var idade = 48;
var idadeDouble = 48.4;
var bool = true;
 
if (nome == 'marco') {
    console.log('correto');
}

function testes() {
    console.log('Função');
}

testes();

const testes2 = () => {
    console.log('Iai! Minha outra função');
}

testes2();

(
    function() {
        console.log('Ola!');
    }
)();

(
    function(nome){
        alert(nome);
    }
)('Marco');

function testes3(nome,func){
    console.log(nome);
    func();
}

testes3('meninas',function(){
    alert('Hey meninas');
});