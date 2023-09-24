//javascriptpro_
let indexValue = 1;

let btm_slide =(e)=>{
  showImg(indexValue = e);   
}

let side_slide =(e)=>{
  showImg(indexValue += e);   
}

let showImg =(e)=>{
 let i;   
 let img = document.querySelectorAll('.container .images img');
 let sliders = document.querySelectorAll('.container .btn-sliders span');
 if(e > img.length){
   indexValue = 1;     
 }
 if(e < 1){
   indexValue = img.length;     
}
for(let i=0;i<img.length;i++){
  img[i].classList.remove('active');
  img[i].classList.add('inactive');
  sliders[i].style.background = 'dimgrey';
}
  img[indexValue - 1].classList.remove('inactive'); 
  img[indexValue - 1].classList.add('active');  
  sliders[indexValue - 1].style.background = 'white';  
}

setInterval(()=>{
 indexValue += 1;
 showImg(indexValue)
},3500)
showImg(indexValue)
