const campoNome = document.getElementById('nome'); // retorno HTMLElement ou nulo
const formulario = document.getElementsByTagName('form'); // retorno HTMLCollectionof<HTMLFormElement> ou nulo
const botaoEnviar = document.getElementById('btn-enviar'); // retorno HTMLElement ou nulo


// É adicionado o "?" pois ele trata os casos de nulo, trata se é válido
botaoEnviar?.addEventListener('click', (e:MouseEvent) => {
    
})