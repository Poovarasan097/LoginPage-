const wrapper =document.querySelector('.wrapper')
const loginLink=document.querySelector('.login-link')
const registerLink=document.querySelector('.register-link')

const btnpop=document.querySelector('.btnlogin-popup')

const iconclose=document.querySelector('.icon-close')

// queryselecter before use (.)


registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
   wrapper.classList.remove('active');
})

btnpop.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
})


iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
})

/*
An event listener is a function that initiates a predefined process if a specific event occurs.
 So, an event listener “listens” for an action,
  then calls a function that performs a related task.
   This event can take one of many forms. 
   Common examples include mouse events, keyboard events, 
   and window events.

*/