const jar=document.getElementById("jar");
const redbtn=document.querySelector("red");

const bottleStyle = jar.currentStyle || window.getComputedStyle(jar);
const borderSize = parseInt(bottleStyle.borderBottomWidth);
let maxheight = jar.offsetHeight - borderSize;

let level=0;
let timeInterval;

function handlePress(color){
    let height=0;
    const colordiv=document.createElement("div");
    jar.appendChild(colordiv);
    colordiv.style.backgroundColor=color;
    timeInterval=setInterval(()=>{
         if(level<maxheight){
            level++;
            height++;
            colordiv.style.height=`${height}px`;
         }
    }, 10)
}
document.addEventListener('mouseup',()=>{
    if(timeInterval){
        clearInterval(timeInterval);
    }
})
// function handlestop(){
//     clearInterval(timeInterval);
// }
function handleEmpty(){
    level=0;
    let child=jar.firstChild;
    while(child){
        jar.removeChild(child);
        child=jar.firstChild;
    }
}