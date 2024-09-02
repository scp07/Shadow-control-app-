
const button = document.querySelector('.color-button');

button.addEventListener('click',()=>{
    const color = Math.floor(Math.random()*17773129).toString(16);
    document.body.style.backgroundColor='#'+color;
});


// box shadow project

const range= document.querySelectorAll('.range');
const box = document.querySelector('.sub-box')
const randomColor = document.querySelector('#color')
const p = document.querySelector('.value')
const submit = document.querySelector('.submit')
const copyButton = document.querySelector('.value-button')
function runAll (){
    const v =`${range[0].value}px ${range[1].value}px ${range[2].value}px ${range[3].value}px ${randomColor.value}`
    p.value = v;
}
copyButton.addEventListener('click',function(e){
    if(p.value === ""){
        p.value='Generate some value' 
    }else{
        p.select();
        navigator.clipboard.writeText(p.value);
        p.value = '';
    }
})
submit.addEventListener('click',runAll)


range[0].addEventListener('change',(e)=>{
  box.style.boxShadow = `${e.target.value}px ${range[1].value}px ${range[2].value}px ${range[3].value}px ${randomColor.value}`
})
range[1].addEventListener('change',(e)=>{
    box.style.boxShadow = `${range[0].value}px ${e.target.value}px ${range[2].value}px ${range[3].value}px ${randomColor.value}`
})
range[2].addEventListener('change',(e)=>{
     box.style.boxShadow = `${range[0].value}px ${range[1].value}px ${e.target.value}px ${range[3].value}px ${randomColor.value}`
})
range[3].addEventListener('change',(e)=>{
     box.style.boxShadow = `${range[0].value}px ${range[1].value}px ${range[2].value}px ${e.target.value}px ${randomColor.value}`
})
randomColor.addEventListener('change',(e)=>{
     box.style.boxShadow = `${range[0].value}px ${range[1].value}px ${range[2].value}px ${range[3].value}px ${e.target.value}`
})
