const mybut = document.querySelector('.button');
const mytext = document.querySelector('.thetitle');

mybut.addEventListener('click', ()=>{
  if(mytext.innerHTML == "Enjoy your coffee"){
    mytext.innerHTML = "Have a nice day"
  }
   
  else{
    mytext.innerHTML = "Enjoy your coffee"
   }
})