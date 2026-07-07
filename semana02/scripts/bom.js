const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');

botao.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        li.textContent = input.value;
        botaoExcluir.textContent = '❌';

        li.append(botaoExcluir);
        lista.append(li);

        input.value = '';
        input.focus();

        botaoExcluir.addEventListener('click', function () {
            lista.removeChild(li);
            input.focus();
        });
    }
});