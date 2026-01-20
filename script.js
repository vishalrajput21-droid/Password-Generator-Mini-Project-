const passwordDisplay=document.querySelector("[password-display]");
const copyBtn=document.querySelector("[copy-btn]");
const passLength=document.querySelector("[pass-length]");
const  slider=document.querySelector("[slider]");
const upperCase=document.querySelector("#uppercase");
const lowerCase=document.querySelector("#lowercase");
const numbers=document.querySelector("#numbers");
const symbols=document.querySelector("#symbols");
const strength=document.querySelector("[strength-indicator]")
const passGenBtn=document.querySelector('.pass-gen')
const allCheckBox=document.querySelectorAll('input[type=checkbox]')
const symbolsStr="`~!@#$%^&*(){}[]='./?<>,"
let passWordLenght=10;
handleSlider();
function handleSlider(){
    passLength.innerHTML=passWordLenght;    
};
slider.addEventListener('input',()=>{
    
    passWordLenght=slider.value;
    handleSlider();    
});
function randomInt(max,min){
  return Math.floor(Math.random()*(max-min+1))+min;
};
function upperletter(){
   return String.fromCharCode(randomInt(65,90));
     
};
function lowerletter(){
     return String.fromCharCode(randomInt(97,122));
};
 function randoNumber(){
    return randomInt(0,9);
 };
function randomsybols(){
     let randomIdex=Math.floor(Math.random()*symbolsStr.length);
     return symbolsStr[randomIdex];
};
