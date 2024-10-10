import './style.css';

const dino = document.querySelector("#dino")
const block = document.querySelector("#block")

window.addEventListener('keydown', event=> {
    conaole.log (event);

    if (event.code == 'Space'){
        console.log('键盘空格按下')；
dino.classList.add("jumpClass")


setTimeout(() => {
    dino.classList.remove("jumpClass")
},300)
    }
});

setInterval(()=> {
const dinoBottom = parseFloat(
    getComputedStyle(dino).getPropertyValue('bottom')
);
const blockLeft = parseFloat(
    getComputedStyle(block).getPropertyValue('letf')
);
if(blockLeft < 20 && blockLeft  > -20 && dinoBottom  <= 20){
    console.log('游戏结束')；
}
}, 10)
