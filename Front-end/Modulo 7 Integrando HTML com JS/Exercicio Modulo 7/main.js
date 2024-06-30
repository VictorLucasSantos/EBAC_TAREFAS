const campoA = document.getElementById('valor-A');
const campoB = document.getElementById('valor-B');
const form = document.getElementById('form-AB');
const msgSucesso = document.querySelector('.success-message');
const msgErro = document.querySelector('.error-message');


form.addEventListener('submit', function(e){
    e.preventDefault(); // cancela a  ação padrão de submit do formular
    
    if (campoA.value < campoB.value){
        campoA.classList.add('success');
        campoB.classList.add('success');
        msgSucesso.innerHTML = `O valor do campo A ${campoA.value} é menor que o campo B ${campoB.value}`;
        msgSucesso.style.display = 'block';
    }
    else{
        campoA.classList.add('error');
        campoB.classList.add('error');
        msgErro.innerHTML = `O valor do campo A: ${campoB.value} é maior que o campo B: ${campoA.value}`;
        msgErro.style.display = 'block';
    }
});

campoA.addEventListener('keyup', function(e){
    msgErro.style.display = 'None';
    msgSucesso.style.display = 'None';
    campoA.classList.remove('success');
    campoA.classList.remove('error');
    campoB.classList.remove('success');
    campoB.classList.remove('error');
})

campoB.addEventListener('keyup', function(e){
    msgErro.style.display = 'None';
    msgSucesso.style.display = 'None';
    campoA.classList.remove('success');
    campoA.classList.remove('error');
    campoB.classList.remove('success');
    campoB.classList.remove('error');
})