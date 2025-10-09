window.onload = function(){
    
    window.addEventListener('scroll', function(){
        
        document.querySelector(".son").innerHTML = window.pageYOffset;
        if(window.pageYOffset > 100){
            document.querySelector('header').classList.add('is-scrolling');
        }
        else{
            document.querySelector('header').classList.remove('is-scrolling');
        }
       
    })

    const menubut = document.querySelector('.hamburger');
    const mobilemen = document.querySelector('.mobile-nav');
    menubut.addEventListener('click', function(){
        menubut.classList.toggle('is-active');
        mobilemen.classList.toggle('is-active');
    })

}

const mylinks = document.querySelectorAll('.mylink');
const myliink = document.querySelector('.mylink');
const info = document.querySelector('.info')
const role = document.querySelector('.role')


mylinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        mylinks.forEach((link)=>{

        link.classList.remove('current')
        
        })
        link.classList.toggle('current')
        if(link.className === 'about mylink current'){
            info.innerHTML = 'The proccess of '
            role.innerHTML = 'casting plastic agreggates into cement'
        }

        if(link.className === 'home mylink current'){
            info.innerHTML = 'Each item '
            role.innerHTML = 'Is uniqe'
           

        }

        if(link.className === 'product mylink current'){
            info.innerHTML = 'Get yours '
            role.innerHTML = 'Today'
        }

        if(link.className === 'contact mylink current'){
            info.innerHTML = 'Send your comments. '
            role.innerHTML = 'Let us know what you think about plastic waste'
        }
    })
    
})