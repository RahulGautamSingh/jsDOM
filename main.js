let btn = document.querySelectorAll(".btn");
let header = document.querySelector(".header");




btn.forEach((elem,index)=>{elem.addEventListener('click',(e)=>{
    
    let str = ".button"+ (index+1);
 
    let thisBtn = document.querySelector(str)

    
    let color = window.getComputedStyle(thisBtn).backgroundColor;
    // console.log(color)
    header.style.backgroundColor = color;
});
});