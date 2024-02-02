let display = document.querySelector(".display > span");
let result = document.querySelector(".display > .result");
let operators = ["+", "-", "/", "*",'.'];
let arr = []

let btns = document.querySelectorAll("button");
btns.forEach((el) => {
  el.addEventListener('click',()=>
  {

    let btnValue = el.innerHTML;    

    if(btnValue === 'C')
    {
      arr = []
      display.innerHTML = '';
      result.innerHTML = '';
      return
    }
    else if(btnValue === '=')
    {
      if(display.innerHTML.includes('%'))
      {
        arr.splice(arr.indexOf('%'),1,'/100') 
        console.log(arr)
      }
      display.innerHTML = arr.join('')
     try
     {
      result.innerHTML = `= ${eval(display.innerHTML)}`
     }catch(error){
      result.innerHTML = '= ERROR'
     }
      
      return
    }
      else if(btnValue === 'arrow')
      {
      arr.pop()
      display.innerHTML = arr.join('')

      if(arr.length === 0)
      {
        display.innerHTML = ''
        result.innerHTML = ''
      }
      }
    else if(operators.indexOf(btnValue) > -1)
    {
      
      if(display.innerHTML[display.innerHTML.length-1] === btnValue)
      {
        return
      }
      
      for(let i = 0; i < operators.length; i++)
      {
        let item = operators[i]
     
        if(item === display.innerHTML[display.innerHTML.length-1])
        {
          arr.pop()
          arr.push(btnValue)
          
          display.innerHTML = arr.join('')
          return
        }
      }
      display.textContent += btnValue
      arr.push(btnValue)
    }
    else{
      display.innerHTML += btnValue
      arr.push(btnValue)
   
    }
  })
});
