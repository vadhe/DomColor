const ubahWarna=document.getElementById('ubahWarna');
ubahWarna.onclick=function()
{
    document.body.classList.toggle('warnaBiru');
}


//create element with text and event
const btnAcak = document.createElement("button");
btnAcak.setAttribute("type","button");
const textBtn = document.createTextNode("btn acak");
btnAcak.appendChild(textBtn);
ubahWarna.after(btnAcak);
btnAcak.addEventListener('click',function()
{
    const r= Math.round(Math.random()*255+1);
    const g= Math.round(Math.random()*255+1);
    const b= Math.round(Math.random()*255+1);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});


//foreach node list plus add event input
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
const range = document.querySelectorAll('input[type=range]');
range.forEach(function(e){
    e.addEventListener('input',function(){
        ubahWarnaSlide();
    });
});

function ubahWarnaSlide()
{
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
   
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
};
function gantiBackground(m,h)
{
    const r = m;
    const g = h;
    const b = 255;
   
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
};


//event xcross x and y

const x = document.body;
x.addEventListener('mousemove touchmove',function()
{
    const xPos =Math.round( (event.clientX/window.innerWidth)*255);
    const yPos =Math.round( (event.clientY/window.innerHeight)*255);
     gantiBackground(xPos,yPos);
    // document.body.style.backgroundColor=`rgb(${xPos},${yPos},255)`;
});
