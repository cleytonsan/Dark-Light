var mode = document.getElementById('mode_icon');
var body = document.getElementById('corpo');
var title = document.getElementById('titulo');
var subTitle = document.getElementById('subTitulo');

mode.addEventListener('click', () => {
    const caixa = document.getElementById('container');

    if(mode.classList.contains('fa-cloud')) {
        mode.classList.remove('fa-cloud');
        mode.classList.add('fa-sun');
        mode.style.color = 'black';
        body.style.background = 'var(--color-gradients)';
        title.style.color = 'black';
        title.innerHTML = 'Bom dia!';
        subTitle.innerHTML = 'Hora de Acorda!';
    } else if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        mode.cli
        body.style.background = 'var(--color-gradi)';
        mode.style.color = 'white';
        title.style.color = 'white';
        title.innerHTML = 'Boa Noite!';
        subTitle.innerHTML = 'Hora de Dormi!'
    } else {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-cloud');
        body.style.background = 'var(--color-gradient)';
        mode.style.color = 'white';
        title.style.color = 'black';
        title.innerHTML = 'Nublado!'
        subTitle.innerHTML = 'Não Esquece De Levar o Guarda Chuva! ';
    }
    

})