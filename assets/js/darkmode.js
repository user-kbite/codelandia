const applytheme = document.querySelector('.mode');

applytheme.addEventListener('click', function(){
    if(applytheme.classList.contains('fa-sun')){
        applytheme.classList.remove('fa-sun');
        applytheme.classList.add('fa-moon');
        document.body.classList.add('dark')
    }
    else{
        applytheme.classList.remove('fa-moon');
        applytheme.classList.add('fa-sun');
        document.body.classList.remove('dark')
    }
})

//document.querySelector('#theme').addEventListener('click', ApplyTheme);