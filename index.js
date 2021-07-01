const burger = document.querySelector("#btn");
const link = document.querySelectorAll('li');
const body = document.querySelector("body > section")
const side = document.getElementById('side-bar');


burger.addEventListener('click', () => {
 side.classList.toggle('active');
 burger.classList.toggle('toggle');
 
 link.forEach((link, index) =>{
     if(link.style.animation){
         link.style.animation = "";
     }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
     }
 })

});

body.addEventListener('click', () => {
    side.classList.remove('active')
    burger.classList.remove('toggle');
    link.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
})
