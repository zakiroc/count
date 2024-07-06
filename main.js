let but = document.createElement('button')
let ind = document.querySelector('.hello')
but.innerHTML = ind

ind.style.width = "100px"
ind.style.height = "50px"
ind.style.background = "green"
ind.style.color = "white"
ind.style.border = "none"
ind.style.borderRadius= "40px"


let p_2 = document.createElement('p')





let h1_2 = document.createElement('h1')
let h1 = document.querySelector('.h1-1')
h1_2.innerHTML = h1

let but_2 = document.querySelector('.helo')

but_2.style.width = "100px"
but_2.style.height = "50px"
but_2.style.background = "red"
but_2.style.color = "white"
but_2.style.border = "none"
but_2.style.borderRadius= "40px"

function myFunction(){

    var countElement = document.getElementById('count');
    var currentCount = parseInt(countElement.innerText);
    var newCount = currentCount + 1;
    countElement.innerText = newCount;


  

}


function myFunction_2(){

    

    var countElement_2 = document.getElementById('count');
    var currentCount_2 = parseInt(countElement_2.innerText);
    var newCount_2 = currentCount_2 - 1;
    countElement_2.innerText = newCount_2;
  

}


