const panda_image=document.getElementById("image")
const title_page=document.createElement("h1")
const root_element=document.getElementById("root")
title_page.innerText="Podaruj Filcaka i Uciesz Dzieciaka!"
var ProgressBar = require('progressbar.js')
var line = new ProgressBar.Line('#container');
const change_bar=()=>(
    setTimeout(
        ()=>{    
            window.location.href="progressbar.html" }
        ,3000 
    )
    
)
change_bar()
var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });
  
  bar.set(0);
  bar.animate(1.0);



var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });
  
  bar.set(0);
  bar.animate(1.0);

const change_image=()=>(
    setTimeout(
        ()=>{
            panda_image.src="./assets/serce.png"
            root_element.appendChild(title_page)
            panda_image.addEventListener("click",()=>{
                window.location.href="Witaj.html"
            })
        }
        ,3000
    )
)
//change_image()

