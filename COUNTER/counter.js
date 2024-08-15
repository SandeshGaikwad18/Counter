const btntitle=document.querySelector("#title");

let curValue=0;
const btnDec=document.querySelector("#Dec");
const btnreset=document.querySelector("#reset");
const btnInc=document.querySelector("#Inc");


btnInc.addEventListener('click',()=>{
    curValue++;

    btntitle.textContent = curValue;

    
})

btnDec.addEventListener('click',()=>{
    curValue--;

    btntitle.textContent = curValue;

    
})

btnreset.addEventListener('click',()=> {
    curValue = 0; 

    btntitle.textContent = curValue;

    
})