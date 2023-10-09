const btn=document.querySelector('.btn');
const menu=document.querySelector('.nav');

btn.addEventListener('click',function(){
    menu.classList.toggle('show');
    nighttoday()
})

function nighttoday(){
    setTimeout(function(){
        document.querySelector('body').style.background='white'
    },2200)
    setTimeout(daytonight,5000)
}
function daytonight(){
    setTimeout(function(){
        document.querySelector('body').style.background='black'
    },0)
    setTimeout(nighttoday,0)
}