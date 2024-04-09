$(document).ready(function(){
$('#tel').mask('(00) 00000-0000')
$('form').validate({
    rules: {
        nome: { 
            required: true
        },
        email: { 
            required: true,
            email: true
        },
        mensagem: {
            required: true
        }
    },
    messages: {
    nome: 'Por favor, insira o nome',
    email: 'Por favor, insira o email',
    telefone: 'Por favor, insira o telefone',
    mensagem: 'Por favor, digite sua mensagem',
    },
    })
})