let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll('.slides img').length;

setInterval(() => {
  index = (index + 1) % total; 
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
document.querySelector(".down-key").addEventListener('click',(event)=>{
  const val=event.target.innerHTML;
  if(val){
  document.querySelector(".down-key").style.height=`${550}px`;
  document.querySelector("#close-botton").classList.add("close-botton");
  document.querySelector('.down-key').style. background='url(https://aaronthomasbabu.github.io/teamunwired.org/img/gallery/g4.jpg)';
  document.querySelector('.down-key').style.transition='1s ease-out';
    
  }
})
document.querySelector("#close-botton").addEventListener('click',(event)=>{
   const value=event.target.innerHTML;
   if(value){
      document.querySelector(".down-key").style.height=`${0}px`;
      document.querySelector("#close-botton").classList.remove("close-botton");
   }
})