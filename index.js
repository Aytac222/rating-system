let btnFirst = document.querySelector('.btn-1');
let btnSecond = document.querySelector('.btn-2');
let btnThird = document.querySelector('.btn-3');
let btnFourth = document.querySelector('.btn-4');
let btnFifth = document.querySelector('.btn-5');
let h2 = document.getElementById('demo');
let arr = [];


btnFirst.addEventListener('click',getActive);
btnSecond.addEventListener('click',getActive);
btnThird.addEventListener('click',getActive);
btnFourth.addEventListener('click',getActive);
btnFifth.addEventListener('click',getActive);

    function getActive(){
        this.classList.toggle('active');
        arr.push(this.innerText);
        text =arr.join(' and ');
        
        h2.innerHTML ='you selected '+ text;
    }

    