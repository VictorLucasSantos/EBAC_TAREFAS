const form = document.getElementById('form-deposito');
const NomeBeneficiario =  document.getElementById('nome-beneficiario');
let Form_valido = false;
const NumeroConta = document.getElementById('numero-conta');
const ValorDeposito = document.getElementById('valor');
const botaoSubmit = document.querySelector('botao-submit');
const InfoSucesso = document.querySelector('success-message'); 

function validaNome(nomerCompleto){
    const nomeComoArray = nomerCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // cancela a  ação padrão de submit do formulario
    const MensagemSucesso = `O Valor de: <b>${ValorDeposito.value}</b> foi depositado com sucesso na conta de numero <b>${NumeroConta.value}</b> do cliente <b>${NomeBeneficiario.value}</b>`;
    InfoSucesso.innerHTML = MensagemSucesso;
    InfoSucesso.style.display = 'block';
})

NomeBeneficiario.addEventListener('change', function(e) {
    console.log(e);
});

NomeBeneficiario.addEventListener('keyup', function(e) {
    // console.log(e);
    // console.log(e.target.value);
    Form_valido = validaNome(e.target.value)
    botaoSubmit.disable = !Form_valido
    if (!Form_valido) {
        NomeBeneficiario.classList.add('error'); // adicionando classes so JavaScript reaproveitando
        // NomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }else{
        NomeBeneficiario.classList.remove('error');
        NomeBeneficiario.style = ''
        document.querySelector('.error-message').style.display = 'none';
    }
});