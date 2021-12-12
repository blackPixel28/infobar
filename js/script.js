const divText = document.querySelector('div.info');
let number = 0;
const speed = 1;
let active = true;
setInterval(()=>{
    if(active == true){
        number+=speed;
        divText.style.left = `${number}px`;
        if(number === window.innerWidth - divText.clientWidth) active = false;        
    }
    else if(active == false){
        number-=speed;
        divText.style.left = `${number}px`;
        if(number === 0) active = true;  
    }
    // console.log(number)
},10)