const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

// cuando hagamos click en un li
  // se le quitaran la clase activo a todos lo li
  // se le quitaran la clase activo a todos lo bloques


  li.forEach( ( cadaLi, i ) =>{
    li[i].addEventListener('click', ()=>{
        li.forEach ( ( cadaLi , i ) =>{
                li[i].classList.remove('activo')
                bloque[i].classList.remove('activo')
            })
            li[i].classList.add('activo')
            bloque[i].classList.add('activo')
            
        })
  })