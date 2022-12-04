
//fondo practica//
var fond1 = document.querySelector('.fondo1');
var fond3 = document.querySelector('.fondo2');
var fond2 = document.querySelector('.fondo3');

///efecto mision y vision//
var txt1 = document.querySelector('.mision');
var txt2 = document.querySelector('.vision1');


// elementos de main
var  slideInner = document.querySelector('.slide-inner');
var  acerca_de = document.querySelector('.acerca_de');
var  reservas = document.querySelector('.reservas');
var  exper = document.querySelector('.exper');
var  even = document.querySelector('.even');
var  aqui = document.querySelector('.aqui');


/// boton de redes 
const redes = document.querySelectorAll('redes_animate')


//elementos del menu de reservas

var cabaña1 = document.querySelector('.cabaña1');

// retraer 

// evento acerca de
acerca_de.addEventListener('click',()=>{
   
    slideInner.remove();

    div = document.getElementById('evento_acerca');
    div.style.display = '';
    document.getElementById('evento_recervas').style.display = "none";
    document.getElementById('evento_experiencias').style.display = "none";
    document.getElementById('evento_eventos').style.display = "none";
    document.getElementById('titulo').style.display = 'none'; 
    document.getElementById('redes').style.display = 'none';  
    document.getElementById('unico-a').classList.add('retrae');
    document.getElementById('unico-a').classList.add('retrae_acerca_de');
    document.getElementById('unico-r').classList.add('retrae_reservas');
    document.getElementById('unico-ex').classList.add('retrae_exper');
    document.getElementById('unico-e').classList.add('retrae_even');

   
})


//evento reservas
reservas.addEventListener('click',()=>{
    
    slideInner.remove();
    
    div = document.getElementById('evento_recervas');
    div.style.display = '';
    document.getElementById('evento_acerca').style.display = "none";
    document.getElementById('evento_experiencias').style.display = "none";
    document.getElementById('evento_eventos').style.display = "none";
    document.getElementById('titulo').style.display = 'none'; 
    document.getElementById('redes').style.display = 'none';  
    document.getElementById('unico-r').classList.add('retrae');
    document.getElementById('unico-r').classList.add('retrae_reservas');
    
})

// evento experiencias
exper.addEventListener('click',()=>{
    slideInner.remove();
    div = document.getElementById('evento_experiencias');
    div.style.display = '';
    document.getElementById('evento_acerca').style.display = "none";
    document.getElementById('evento_recervas').style.display = "none";
    document.getElementById('evento_eventos').style.display = "none";
    document.getElementById('redes').style.display = 'none';  
    document.getElementById('unico-ex').classList.add('retrae');
    document.getElementById('unico-ex').classList.add('retrae_exper');
    

})

// eventos eventos_new
even.addEventListener('click',()=>{
    slideInner.remove();
    div = document.getElementById('evento_eventos');
    div.style.display = '';
    document.getElementById('evento_acerca').style.display = "none";
    document.getElementById('evento_experiencias').style.display = "none";
    document.getElementById('evento_recervas').style.display = "none";
    document.getElementById('titulo').style.display = 'none'; 
    document.getElementById('redes').style.display = 'none';  
    document.getElementById('unico-e').classList.add('retrae');
    document.getElementById('unico-e').classList.add('retrae_even');

})

aqui.addEventListener('click',()=>{
    //document.getElementById('redes').style.display = '';
   
    div = document.getElementById('redes');
    div.style.display = '';
    redes.classList.add('activodo');
    document.getElementById('unico-aq').classList.add('retrae');


})


document.querySelector('.popup-reservas span').onclick = () =>{
    document.querySelector('.popup-reservas').style.display = 'none'; /* me permite remover el elemento span dandole vida al boton cerrar*/
}


txt1.addEventListener('mousemove',()=>{
    document.getElementById('mision').style.display = "none";
    div = document.getElementById('vision');
    div.style.display = '';

     
})   

txt2.addEventListener('mouseout',()=>{
    document.getElementById('vision').style.display = "none";
    div = document.getElementById('mision');
    div.style.display = '';

})

txt1.addEventListener('mousemove',()=>{
    document.getElementById('mision').style.display = "none";
    div = document.getElementById('vision');
    div.style.display = '';

     
})   

txt2.addEventListener('mouseout',()=>{
    document.getElementById('vision').style.display = "none";
    div = document.getElementById('mision');
    div.style.display = '';

})

txt2.addEventListener('mouseout',()=>{
    document.getElementById('vision').style.display = "none";
    div = document.getElementById('mision');
    div.style.display = '';

})

/*
cabaña1.addEventListener('click',()=>{
   
    document.getElementById('cabaña_2').style.display = "none";
    document.getElementById('cabaña_3').style.display = "none";
    div = document.getElementById('ver_cabaña1');
    div.style.display = 'grid';

})

cabaña1.addEventListener('mouseout',()=>{
   
    
    div = document.getElementById('cabaña_2');
    div.style.display = 'grid';
    div = document.getElementById('cabaña_3');
    div.style.display = 'grid';
    document.getElementById('ver_cabaña1').style.display = "none";


})*/

