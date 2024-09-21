import {select, styles, selectElements} from './Utilite/utilite-dom.js';
//select elements
//form

let inputs = selectElements('input',true);
let form = select('form',{
  events:{
    submit:(e)=>{
      
      e.preventDefault();
      
      inputs.forEach(input => {
  if (input.value === '') {
    styles(input, {
      border: '1px solid hsl(0, 100%, 66%)'
    })
  } else{
    
    styles(form,{
      transition:'all .3s ease-in-out',
      skewY:'50px',
      transform:'translateY(100vh)',
      
    })
    
    select('article',{
      styles:{
        transition:'all .5s ease-in-out',
        transform:'translateY(-100%)',
        opacity:1
      }
    })
    
  }
})
      
      
    }
  }
})
